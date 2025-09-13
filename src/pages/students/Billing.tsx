import { Check, CreditCard, Download, Star, Zap } from 'lucide-react';

const Billing = () => {
  const currentPlan = {
    name: 'Student Pro',
    price: 19.99,
    billing: 'monthly',
    features: [
      'Unlimited quiz access',
      'Advanced performance analytics',
      'Priority customer support',
      'Offline note downloads',
      'Custom study schedules',
    ]
  };

  const plans = [
    {
      id: 'free',
      name: 'Free Explorer',
      price: 0,
      billing: 'forever',
      description: 'Perfect for getting started',
      features: [
        '5 quizzes per day',
        'Basic performance stats',
        'Standard flashcards',
        'Community support',
      ],
      limitations: [
        'Limited quiz access',
        'No offline downloads',
        'Basic analytics only',
      ],
      cta: 'Current Plan',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Student Pro',
      price: 19.99,
      billing: 'month',
      description: 'Best for serious students',
      features: [
        'Unlimited quiz access',
        'Advanced analytics',
        'Offline downloads',
        'Priority support',
        'Custom schedules',
        'Performance predictions',
      ],
      cta: 'Upgrade Now',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Academic Elite',
      price: 39.99,
      billing: 'month',
      description: 'Complete learning solution',
      features: [
        'Everything in Pro',
        '1-on-1 tutor sessions',
        'Personalized study plans',
        'Mock exam simulations',
        'University prep guides',
        'Career counseling',
      ],
      cta: 'Go Elite',
      popular: false,
    },
  ];

  const invoices = [
    { id: 1, date: '2024-01-15', amount: 19.99, status: 'paid', plan: 'Student Pro' },
    { id: 2, date: '2023-12-15', amount: 19.99, status: 'paid', plan: 'Student Pro' },
    { id: 3, date: '2023-11-15', amount: 19.99, status: 'paid', plan: 'Student Pro' },
  ];

  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/26', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '10/25', isDefault: false },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Billing & Subscription</h1>
          <p className="text-muted-foreground">Manage your subscription and billing information</p>
        </div>

        {/* Current Plan Overview */}
        <div className="card-neumorphic mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gradient mb-2">Current Plan: {currentPlan.name}</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl font-bold text-accent-gradient">
                  ${currentPlan.price}
                  <span className="text-sm text-muted-foreground">/{currentPlan.billing}</span>
                </div>
                <div className="chip-streak">Active</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Next billing: February 15, 2024 • Auto-renewal enabled
              </div>
            </div>
            <div className="flex gap-3">
              <button className="btn-hero text-sm px-4 py-2">
                Manage Subscription
              </button>
              <button className="btn-cta text-sm px-4 py-2">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Available Plans */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gradient mb-6">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`card-neumorphic card-hover relative ${
                  plan.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="chip-streak flex items-center space-x-1">
                      <Star size={12} />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-gradient">
                    ${plan.price}
                    <span className="text-sm text-muted-foreground">/{plan.billing}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    plan.id === 'pro'
                      ? 'btn-cta'
                      : plan.price === 0
                      ? 'bg-secondary text-secondary-foreground'
                      : 'btn-hero'
                  }`}
                  disabled={plan.price === 0}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Billing History & Payment Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing History */}
          <div className="card-neumorphic">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gradient">Billing History</h3>
              <button className="text-sm text-primary hover:text-primary-light transition-colors">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{invoice.plan}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(invoice.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${invoice.amount}</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {invoice.status}
                      </span>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="card-neumorphic">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gradient">Payment Methods</h3>
              <button className="btn-hero text-sm px-4 py-2 flex items-center space-x-2">
                <CreditCard size={14} />
                <span>Add Card</span>
              </button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-6 bg-gradient-to-r from-primary to-primary-light rounded flex items-center justify-center">
                      <CreditCard size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {method.type} •••• {method.last4}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Expires {method.expiry}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {method.isDefault && (
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                        Default
                      </span>
                    )}
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="card-neumorphic mt-8">
          <h3 className="text-lg font-semibold text-gradient mb-6">This Month's Usage</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-1">47</div>
              <div className="text-sm text-muted-foreground">Quizzes Taken</div>
              <div className="text-xs text-accent">Unlimited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gradient mb-1">156</div>
              <div className="text-sm text-muted-foreground">Notes Downloaded</div>
              <div className="text-xs text-accent">Unlimited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-1">23</div>
              <div className="text-sm text-muted-foreground">Support Tickets</div>
              <div className="text-xs text-accent">Priority Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gradient mb-1">89%</div>
              <div className="text-sm text-muted-foreground">Feature Usage</div>
              <div className="text-xs text-primary">All Features</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Billing;