const plans = ["free", "team", "business", "enterprise"] as const;

type APlan = typeof plans[number];

type UppercasePlan<P extends APlan> = Uppercase<P & string>;
type LowercasePlan<P extends APlan> = Lowercase<P & string>;
type CapitalizedPlan<P extends APlan> = Capitalize<P & string>;

function toUpperCase<P extends APlan>(plan: P): UppercasePlan<P> {
  return plan.toUpperCase() as UppercasePlan<P>;
}

function toLowerCase<P extends APlan>(plan: P): LowercasePlan<P> {
  return plan.toLowerCase() as LowercasePlan<P>;
}

function capitalized<P extends APlan>(plan: P): CapitalizedPlan<P> {
  return (plan.charAt(0).toUpperCase() + plan.slice(1)) as CapitalizedPlan<P>;
}

const businessPlanUppercase = toUpperCase("business");
console.log(businessPlanUppercase);

const businessPlanLowerCase = toLowerCase("business");
console.log(businessPlanLowerCase);

const businessPlanCapitalized = capitalized("business");
console.log(businessPlanCapitalized);

// better approach typing any case

const NORMALIZED_PLAN_LOOKUP = {
  Free: "Free",
  free: "Free",
  FREE: "Free",
  Team: "Team",
  team: "Team",
  TEAM: "Team",
  Business: "Business",
  business: "Business",
  BUSINESS: "Business",
  Enterprise: "Enterprise",
  enterprise: "Enterprise",
  ENTERPRISE: "Enterprise",
} as const;

type PlanAnyCase = keyof typeof NORMALIZED_PLAN_LOOKUP;
type Plan = typeof NORMALIZED_PLAN_LOOKUP[PlanAnyCase];

// narrow a plan to normalized form
type NormalCase<P extends PlanAnyCase> = typeof NORMALIZED_PLAN_LOOKUP[P];

// broaden a plan from normalized form
type AnyCase<P extends Plan> = {
  [K in PlanAnyCase as NormalCase<K>]: K;
}[P];

function capitalizePlan<K extends PlanAnyCase>(plan: K): NormalCase<K> {
  return NORMALIZED_PLAN_LOOKUP[plan];
}

const capitalizedPlan = capitalizePlan("BUSINESS");
