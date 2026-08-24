export interface FaqItem {
  questionKey: string;
  answerKey: string;
}

export interface FaqCategory {
  titleKey: string;
  items: FaqItem[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    titleKey: "help.categories.gettingStarted",
    items: [
      { questionKey: "help.faq.gettingStarted.q1.question", answerKey: "help.faq.gettingStarted.q1.answer" },
      { questionKey: "help.faq.gettingStarted.q2.question", answerKey: "help.faq.gettingStarted.q2.answer" },
      { questionKey: "help.faq.gettingStarted.q3.question", answerKey: "help.faq.gettingStarted.q3.answer" },
      { questionKey: "help.faq.gettingStarted.q4.question", answerKey: "help.faq.gettingStarted.q4.answer" },
      { questionKey: "help.faq.gettingStarted.q5.question", answerKey: "help.faq.gettingStarted.q5.answer" },
    ],
  },
  {
    titleKey: "help.categories.inventoryManagement",
    items: [
      { questionKey: "help.faq.inventoryManagement.q1.question", answerKey: "help.faq.inventoryManagement.q1.answer" },
      { questionKey: "help.faq.inventoryManagement.q2.question", answerKey: "help.faq.inventoryManagement.q2.answer" },
      { questionKey: "help.faq.inventoryManagement.q3.question", answerKey: "help.faq.inventoryManagement.q3.answer" },
      { questionKey: "help.faq.inventoryManagement.q4.question", answerKey: "help.faq.inventoryManagement.q4.answer" },
      { questionKey: "help.faq.inventoryManagement.q5.question", answerKey: "help.faq.inventoryManagement.q5.answer" },
    ],
  },
  {
    titleKey: "help.categories.purchaseOrders",
    items: [
      { questionKey: "help.faq.purchaseOrders.q1.question", answerKey: "help.faq.purchaseOrders.q1.answer" },
      { questionKey: "help.faq.purchaseOrders.q2.question", answerKey: "help.faq.purchaseOrders.q2.answer" },
      { questionKey: "help.faq.purchaseOrders.q3.question", answerKey: "help.faq.purchaseOrders.q3.answer" },
      { questionKey: "help.faq.purchaseOrders.q4.question", answerKey: "help.faq.purchaseOrders.q4.answer" },
    ],
  },
  {
    titleKey: "help.categories.reportsAnalytics",
    items: [
      { questionKey: "help.faq.reportsAnalytics.q1.question", answerKey: "help.faq.reportsAnalytics.q1.answer" },
      { questionKey: "help.faq.reportsAnalytics.q2.question", answerKey: "help.faq.reportsAnalytics.q2.answer" },
      { questionKey: "help.faq.reportsAnalytics.q3.question", answerKey: "help.faq.reportsAnalytics.q3.answer" },
    ],
  },
  {
    titleKey: "help.categories.accountSettings",
    items: [
      { questionKey: "help.faq.accountSettings.q1.question", answerKey: "help.faq.accountSettings.q1.answer" },
      { questionKey: "help.faq.accountSettings.q2.question", answerKey: "help.faq.accountSettings.q2.answer" },
      { questionKey: "help.faq.accountSettings.q3.question", answerKey: "help.faq.accountSettings.q3.answer" },
    ],
  },
];
