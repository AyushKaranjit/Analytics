const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS middleware (optional, but useful for frontend integration)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Dashboard data
const dashboardData = {
  dashboard: {
    user: {
      name: "Anjana Dhakal",
      role: "Admin",
    },
    summary: {
      totalSales: {
        value: 983410,
        change: "+5.34%",
        comparisonText: "vs last week",
      },
      totalOrders: {
        value: 58375,
        change: "-2.88%",
        comparisonText: "vs last week",
      },
      totalVisitors: {
        value: 237782,
        change: "+8.02%",
        comparisonText: "vs last week",
      },
    },
    revenueAnalytics: {
      period: "Last 8 Days",
      averageOrderValue: 514.52,
      dataPoints: [
        { date: "12 Aug", revenue: 4000, order: 2000 },
        { date: "13 Aug", revenue: 8000, order: 3000 },
        { date: "14 Aug", revenue: 6000, order: 4000 },
        { date: "15 Aug", revenue: 10000, order: 5000 },
        { date: "16 Aug", revenue: 14521, order: 7000 },
        { date: "17 Aug", revenue: 12000, order: 6000 },
        { date: "18 Aug", revenue: 9000, order: 4000 },
        { date: "19 Aug", revenue: 11000, order: 5000 },
      ],
    },
    monthlyTarget: {
      percentage: 85,
      change: "+8.02% from last month",
      status: "Great Progress!",
      message:
        "Our achievement increased by NPR 200,000 Let's reach 100% next month",
      target: 600000,
      revenue: 510000,
      totalGoal: 3400000,
    },
    topCategories: {
      total: 3400000,
      categories: [
        { name: "Electronics", value: 1200000 },
        { name: "Fashion", value: 950000 },
        { name: "Home & Kitchen", value: 750000 },
        { name: "Beauty & Personal Care", value: 500000 },
      ],
    },
    activeUser: {
      total: 2758,
      change: "+8.02%",
      comparisonText: "from last month",
      countries: [
        { name: "Kathmandu", percentage: 36 },
        { name: "Lalitpur", percentage: 24 },
        { name: "Bhaktapur", percentage: 17.5 },
        { name: "Pokhara", percentage: 15 },
      ],
    },
    conversionRate: {
      period: "This Week",
      metrics: [
        { name: "Product Views", value: 25000, change: "-5%" },
        { name: "Add to Cart", value: 12000, change: "-2%" },
        { name: "Proceed to Checkout", value: 8500, change: "+4%" },
        { name: "Completed Purchases", value: 6200, change: "-7%" },
        { name: "Abandoned Carts", value: 3000, change: "-8%" },
      ],
    },
    trafficSources: {
      sources: [
        { name: "Direct Traffic", percentage: 40 },
        { name: "Organic Search", percentage: 30 },
        { name: "Social Media", percentage: 15 },
        { name: "Referral Traffic", percentage: 10 },
        { name: "Email Campaigns", percentage: 5 },
      ],
    },
    recentOrders: [
      {
        no: 1,
        orderId: "#10246",
        customer: "Krijal Koju",
        product: "Logitech MX Keys",
        qty: 2,
        total: 38000,
        status: "Pending",
      },
      {
        no: 2,
        orderId: "#10245",
        customer: "Madhan Shrestha",
        product: "iPhone 16 Pro",
        qty: 1,
        total: 189999,
        status: "Processing",
      },
      {
        no: 3,
        orderId: "#10244",
        customer: "Saurav Ghimire",
        product: "Samsung Galaxy Buds 2 Pro",
        qty: 3,
        total: 54000,
        status: "Shipped",
      },
      {
        no: 4,
        orderId: "#10243",
        customer: "Anjana Dhakal",
        product: "Dell G15 Gaming Laptop",
        qty: 1,
        total: 165000,
        status: "Cancelled",
      },
      {
        no: 5,
        orderId: "#10242",
        customer: "Rabin Koirala",
        product: "Apple AirPods Pro 2",
        qty: 1,
        total: 38000,
        status: "Delivered",
      },
      {
        no: 6,
        orderId: "#10241",
        customer: "Prasant Pant",
        product: "Sony PlayStation 5",
        qty: 1,
        total: 89999,
        status: "Shipped",
      },
      {
        no: 7,
        orderId: "#10240",
        customer: "Sapat Chaudhary",
        product: "ASUS Vivobook 16",
        qty: 1,
        total: 95000,
        status: "Delivered",
      },
      {
        no: 8,
        orderId: "#10239",
        customer: "Ayush Karanjit",
        product: 'LG 27" 4K Monitor',
        qty: 2,
        total: 118000,
        status: "Processing",
      },
      {
        no: 9,
        orderId: "#10238",
        customer: "Krijal Koju",
        product: "Razer DeathAdder V3",
        qty: 1,
        total: 8500,
        status: "Delivered",
      },
      {
        no: 10,
        orderId: "#10237",
        customer: "Madhan Shrestha",
        product: "iPad Air M2",
        qty: 1,
        total: 125000,
        status: "Cancelled",
      },
      {
        no: 11,
        orderId: "#10236",
        customer: "Saurav Ghimire",
        product: "Bose QuietComfort Ultra",
        qty: 1,
        total: 62000,
        status: "Delivered",
      },
      {
        no: 12,
        orderId: "#10235",
        customer: "Anjana Dhakal",
        product: 'MacBook Pro 14" M3',
        qty: 1,
        total: 275000,
        status: "Shipped",
      },
      {
        no: 13,
        orderId: "#10234",
        customer: "Rabin Koirala",
        product: 'Samsung 55" QLED TV',
        qty: 1,
        total: 145000,
        status: "Delivered",
      },
    ],
    recentActivity: [
      {
        timestamp: "2:45 PM",
        message: "Krijal Koju purchased 1 item totaling Rs. 38,000.",
      },
      {
        timestamp: "1:15 PM",
        message:
          "Madhan Shrestha's order #10245 status changed from 'Pending' to 'Processing'.",
      },
      {
        timestamp: "11:30 AM",
        message:
          "Saurav Ghimire left a 5-star review for 'Bose QuietComfort Ultra'.",
      },
      {
        timestamp: "10:20 AM",
        message: "'Apple AirPods Pro 2' stock is below 8 units.",
      },
      {
        timestamp: "9:15 AM",
        message: "Anjana Dhakal's order #10243 was cancelled.",
      },
      {
        timestamp: "8:30 AM",
        message: "Prasant Pant's order #10241 was Shipped.",
      },
    ],
  },
};

// Routes
// GET - Retrieve full dashboard data
app.get("/api/ecommerce-analytics", (req, res) => {
  res.json(dashboardData);
});

// GET - Retrieve specific sections
app.get("/api/ecommerce-analytics/summary", (req, res) => {
  res.json(dashboardData.dashboard.summary);
});

app.get("/api/ecommerce-analytics/revenue-analytics", (req, res) => {
  res.json(dashboardData.dashboard.revenueAnalytics);
});

app.get("/api/ecommerce-analytics/recent-orders", (req, res) => {
  res.json(dashboardData.dashboard.recentOrders);
});

app.get("/api/ecommerce-analytics/recent-activity", (req, res) => {
  res.json(dashboardData.dashboard.recentActivity);
});

app.get("/api/ecommerce-analytics/top-categories", (req, res) => {
  res.json(dashboardData.dashboard.topCategories);
});

app.get("/api/ecommerce-analytics/active-users", (req, res) => {
  res.json(dashboardData.dashboard.activeUser);
});

app.get("/api/ecommerce-analytics/conversion-rate", (req, res) => {
  res.json(dashboardData.dashboard.conversionRate);
});

app.get("/api/ecommerce-analytics/traffic-sources", (req, res) => {
  res.json(dashboardData.dashboard.trafficSources);
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "E-commerce Analytics API is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `E-commerce Analytics API is running on http://localhost:${PORT}`
  );
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET /api/ecommerce-analytics - Full dashboard data`);
  console.log(`  GET /api/ecommerce-analytics/summary - Summary metrics`);
  console.log(
    `  GET /api/ecommerce-analytics/revenue-analytics - Revenue data`
  );
  console.log(`  GET /api/ecommerce-analytics/recent-orders - Recent orders`);
  console.log(
    `  GET /api/ecommerce-analytics/recent-activity - Recent activity`
  );
  console.log(`  GET /api/ecommerce-analytics/top-categories - Top categories`);
  console.log(`  GET /api/ecommerce-analytics/active-users - Active user data`);
  console.log(
    `  GET /api/ecommerce-analytics/conversion-rate - Conversion metrics`
  );
  console.log(
    `  GET /api/ecommerce-analytics/traffic-sources - Traffic sources`
  );
});

module.exports = app;
