import {onCall, HttpsError}
  from "firebase-functions/v2/https";

import {
  getFirestore,
} from "firebase-admin/firestore";

export const generateSummary =
onCall(async (request) => {
  const {date} = request.data;

  if (
    !date ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date)
  ) {
    throw new HttpsError(
      "invalid-argument",
      "Valid date required"
    );
  }

  const db = getFirestore();

  const snap = await db
    .collection("expenses")
    .where("date", "==", date)
    .where("isDeleted", "!=", true)
    .get();

  const totals:
  Record<string, number> = {};

  let grandTotal = 0;

  snap.forEach((doc) => {
    const e = doc.data();

    totals[e["category"]] =
      (totals[e["category"]] || 0) +
      e["amount"];

    grandTotal += e["amount"];
  });

  const summary = {

    date,

    totalsByCategory: totals,

    grandTotal,

    generatedAt:
      new Date().toISOString(),
  };

  await db
    .collection("daily-summaries")
    .doc(date)
    .set(summary);

  return summary;
});
