const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// E-commerce Analytics data
const ecommerceAnalyticsData = {
  user: {
    name: "Anjana Dhakal",
    role: "Admin",
  },
  charts: [
    {
      id: "revenue_analytics",
      type: "line",
      title: "Revenue Analytics",
      description: "Revenue and order trends over the last 8 days.",
      period: "Last 8 Days",
      average_order_value: 514.52,
      data: [
        { date: "2025-08-12", day: "Mon", revenue: 4000, orders: 2000 },
        { date: "2025-08-13", day: "Tue", revenue: 8000, orders: 3000 },
        { date: "2025-08-14", day: "Wed", revenue: 6000, orders: 4000 },
        { date: "2025-08-15", day: "Thu", revenue: 10000, orders: 5000 },
        { date: "2025-08-16", day: "Fri", revenue: 14521, orders: 7000 },
        { date: "2025-08-17", day: "Sat", revenue: 12000, orders: 6000 },
        { date: "2025-08-18", day: "Sun", revenue: 9000, orders: 4000 },
        { date: "2025-08-19", day: "Mon", revenue: 11000, orders: 5000 },
      ],
    },
    {
      id: "top_categories",
      type: "pie",
      title: "Top Categories",
      description: "Sales distribution across product categories.",
      total: 3400000,
      data: {
        Electronics: 1200000,
        Fashion: 950000,
        "Home & Kitchen": 750000,
        "Beauty & Personal Care": 500000,
      },
    },
    {
      id: "traffic_sources",
      type: "donut",
      title: "Traffic Sources",
      description: "Distribution of traffic sources to the platform.",
      data: {
        "Direct Traffic": 40,
        "Organic Search": 30,
        "Social Media": 15,
        "Referral Traffic": 10,
        "Email Campaigns": 5,
      },
    },
    {
      id: "active_users_by_location",
      type: "bar",
      title: "Active Users by Location",
      description: "Active user distribution across cities.",
      total: 2758,
      change: "+8.02%",
      comparison_text: "from last month",
      data: {
        Kathmandu: 36,
        Lalitpur: 24,
        Bhaktapur: 17.5,
        Pokhara: 15,
      },
    },
    {
      id: "convertion_funnel",
      type: "funnel",
      title: "Convertion Rate",
      description: "Customer journey from product view to purchase.",
      period: "This Week",
      data: [
        { name: "Product Views", value: 25000, change: "-5%" },
        { name: "Add to Cart", value: 12000, change: "-2%" },
        { name: "Proceed to Checkout", value: 8500, change: "+4%" },
        { name: "Completed Purchases", value: 6200, change: "-7%" },
        { name: "Abandoned Carts", value: 3000, change: "-8%" },
      ],
    },
  ],
  cards: {
    number_cards: [
      {
        id: "total_sales",
        title: "Total Sales",
        value: "983,410",
        currency: "NPR",
        change: "+5.34%",
        comparison_text: "vs last week",
        icon: "currency",
        color: "green",
      },
      {
        id: "total_orders",
        title: "Total Orders",
        value: "58,375",
        change: "-2.88%",
        comparison_text: "vs last week",
        icon: "shopping-cart",
        color: "red",
      },
      {
        id: "total_visitors",
        title: "Total Visitors",
        value: "237,782",
        change: "+8.02%",
        comparison_text: "vs last week",
        icon: "users",
        color: "blue",
      },
    ],
    progress_cards: [
      {
        id: "monthly_target",
        title: "Monthly Target",
        description: "Progress towards monthly revenue goal.",
        percentage: 85,
        change: "+8.02% from last month",
        status: "Great Progress!",
        message:
          "Our achievement increased by NPR 200,000 Let's reach 100% next month",
        details: {
          target: 600000,
          revenue: 510000,
          total_goal: 3400000,
        },
      },
    ],
  },
  tables: [
    {
      id: "recent_orders",
      title: "Recent Orders",
      description: "Latest orders placed on the platform.",
      columns: [
        "No",
        "Order ID",
        "Customer",
        "Product",
        "Qty",
        "Total",
        "Status",
      ],
      data: [
        {
          no: 1,
          order_id: "#10246",
          customer: "Krijal Koju",
          product: "Logitech MX Keys",
          qty: 2,
          total: 38000,
          status: "Pending",
        },
        {
          no: 2,
          order_id: "#10245",
          customer: "Madhan Shrestha",
          product: "iPhone 16 Pro",
          qty: 1,
          total: 189999,
          status: "Processing",
        },
        {
          no: 3,
          order_id: "#10244",
          customer: "Saurav Ghimire",
          product: "Samsung Galaxy Buds 2 Pro",
          qty: 3,
          total: 54000,
          status: "Shipped",
        },
        {
          no: 4,
          order_id: "#10243",
          customer: "Anjana Dhakal",
          product: "Dell G15 Gaming Laptop",
          qty: 1,
          total: 165000,
          status: "Cancelled",
        },
        {
          no: 5,
          order_id: "#10242",
          customer: "Rabin Koirala",
          product: "Apple AirPods Pro 2",
          qty: 1,
          total: 38000,
          status: "Delivered",
        },
        {
          no: 6,
          order_id: "#10241",
          customer: "Prasant Pant",
          product: "Sony PlayStation 5",
          qty: 1,
          total: 89999,
          status: "Shipped",
        },
        {
          no: 7,
          order_id: "#10240",
          customer: "Sapat Chaudhary",
          product: "ASUS Vivobook 16",
          qty: 1,
          total: 95000,
          status: "Delivered",
        },
        {
          no: 8,
          order_id: "#10239",
          customer: "Ayush Karanjit",
          product: 'LG 27" 4K Monitor',
          qty: 2,
          total: 118000,
          status: "Processing",
        },
        {
          no: 9,
          order_id: "#10238",
          customer: "Krijal Koju",
          product: "Razer DeathAdder V3",
          qty: 1,
          total: 8500,
          status: "Delivered",
        },
        {
          no: 10,
          order_id: "#10237",
          customer: "Madhan Shrestha",
          product: "iPad Air M2",
          qty: 1,
          total: 125000,
          status: "Cancelled",
        },
        {
          no: 11,
          order_id: "#10236",
          customer: "Saurav Ghimire",
          product: "Bose QuietComfort Ultra",
          qty: 1,
          total: 62000,
          status: "Delivered",
        },
        {
          no: 12,
          order_id: "#10235",
          customer: "Anjana Dhakal",
          product: 'MacBook Pro 14" M3',
          qty: 1,
          total: 275000,
          status: "Shipped",
        },
        {
          no: 13,
          order_id: "#10234",
          customer: "Rabin Koirala",
          product: 'Samsung 55" QLED TV',
          qty: 1,
          total: 145000,
          status: "Delivered",
        },
      ],
    },
  ],
  activity_feed: [
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
};

// Helper function to create standardized response
const createResponse = (
  data,
  message = "Data fetched successfully",
  fromCache = false
) => {
  return {
    message: {
      status: "success",
      message: message,
      from_cache: fromCache,
      data: data,
    },
  };
};

// Routes
// GET - Retrieve full e-commerce analytics data
app.get("/api/ecommerce-analytics", (req, res) => {
  res.json(
    createResponse(
      ecommerceAnalyticsData,
      "E-commerce analytics fetched successfully"
    )
  );
});

// GET - Retrieve summary metrics
app.get("/api/ecommerce-analytics/summary", (req, res) => {
  res.json(
    createResponse(
      { cards: { number_cards: ecommerceAnalyticsData.cards.number_cards } },
      "Summary metrics fetched successfully"
    )
  );
});

// GET - Retrieve charts
app.get("/api/ecommerce-analytics/charts", (req, res) => {
  res.json(
    createResponse(
      { charts: ecommerceAnalyticsData.charts },
      "Charts data fetched successfully"
    )
  );
});

// GET - Retrieve specific chart by ID
app.get("/api/ecommerce-analytics/charts/:chartId", (req, res) => {
  const chart = ecommerceAnalyticsData.charts.find(
    (c) => c.id === req.params.chartId
  );
  if (chart) {
    res.json(
      createResponse(
        { chart },
        `Chart '${req.params.chartId}' fetched successfully`
      )
    );
  } else {
    res.status(404).json({
      message: {
        status: "error",
        message: "Chart not found",
        data: null,
      },
    });
  }
});

// GET - Retrieve cards
app.get("/api/ecommerce-analytics/cards", (req, res) => {
  res.json(
    createResponse(
      { cards: ecommerceAnalyticsData.cards },
      "Cards data fetched successfully"
    )
  );
});

// GET - Retrieve tables
app.get("/api/ecommerce-analytics/tables", (req, res) => {
  res.json(
    createResponse(
      { tables: ecommerceAnalyticsData.tables },
      "Tables data fetched successfully"
    )
  );
});

// GET - Retrieve recent orders
app.get("/api/ecommerce-analytics/recent-orders", (req, res) => {
  const recentOrdersTable = ecommerceAnalyticsData.tables.find(
    (t) => t.id === "recent_orders"
  );
  res.json(
    createResponse(
      { table: recentOrdersTable },
      "Recent orders fetched successfully"
    )
  );
});

// GET - Retrieve activity feed
app.get("/api/ecommerce-analytics/activity-feed", (req, res) => {
  res.json(
    createResponse(
      { activity_feed: ecommerceAnalyticsData.activity_feed },
      "Activity feed fetched successfully"
    )
  );
});

// GET - Retrieve user info
app.get("/api/ecommerce-analytics/user", (req, res) => {
  res.json(
    createResponse(
      { user: ecommerceAnalyticsData.user },
      "User information fetched successfully"
    )
  );
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    message: {
      status: "success",
      message: "E-commerce Analytics API is running",
      data: { uptime: process.uptime(), timestamp: new Date().toISOString() },
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `E-commerce Analytics API is running on http://localhost:${PORT}`
  );
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET /api/ecommerce-analytics - Full analytics data`);
  console.log(`  GET /api/ecommerce-analytics/summary - Summary metrics`);
  console.log(`  GET /api/ecommerce-analytics/charts - All charts`);
  console.log(
    `  GET /api/ecommerce-analytics/charts/:chartId - Specific chart`
  );
  console.log(`  GET /api/ecommerce-analytics/cards - All cards`);
  console.log(`  GET /api/ecommerce-analytics/tables - All tables`);
  console.log(
    `  GET /api/ecommerce-analytics/recent-orders - Recent orders table`
  );
  console.log(`  GET /api/ecommerce-analytics/activity-feed - Activity feed`);
  console.log(`  GET /api/ecommerce-analytics/user - User information`);
  console.log(`  GET /health - Health check`);
});

module.exports = app;
