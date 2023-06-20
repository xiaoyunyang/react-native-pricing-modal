const BENEFIT = {
  UNLIMITED_ACCOUNTS: { icon: "", name: "Unlimited Accounts", description: "Unlimited calls and chats with your very personal finance coach" },
  PROACTIVE_TIPS: { icon: "", name: "Proactive tips", description: "Unlimited calls and chats with your very personal finance coach" },
  NEW_AI_TOOLS: { icon: "", name: "New AI Tools", description: "Unlimited calls and chats with your very personal finance coach" },
  HUMAN_COACHING: { icon: "", name: "Human Coaching", description: "Unlimited calls and chats with your very personal finance coach" },
  ALL_PRO_FEATURES: { icon: "", name: "All Pro Features", description: "Unlimited accounts, proactive financial tips from Parthean AI, and our new, most powerful AI tools" },
}

// We can derive the annualPrice from the monthly price in code when we create this object
export const TIERS = [
  { id: "MONTHLY_PRO", name: "Parthean Pro", monthlyPrice: "$9.99/month", benefits: [BENEFIT.UNLIMITED_ACCOUNTS, BENEFIT.PROACTIVE_TIPS, BENEFIT.NEW_AI_TOOLS] },
  { id: "ANNUAL_PRO",  name: "Parthean Pro", monthlyPrice: "$5.83/month", annualPrice: "$69.99/year", benefits: [BENEFIT.UNLIMITED_ACCOUNTS, BENEFIT.PROACTIVE_TIPS, BENEFIT.NEW_AI_TOOLS]},
  { id: "MONTHLY_PRO_COACHING",  name: "Parthean Pro + Coaching", monthlyPrice: "$79.99/month", benefits: [BENEFIT.HUMAN_COACHING, BENEFIT.ALL_PRO_FEATURES]},
  { id: "ANNUAL_PRO_COACHING",  name: "Parthean Pro + Coaching", monthlyPrice: "66.67/month", annualPrice: "$879.99/year", benefits: [BENEFIT.HUMAN_COACHING, BENEFIT.ALL_PRO_FEATURES]},
]