export const dummyData = [
  {
    sno: 1,
    department: "Personal Details",
    totalTask: 10,
    inProgress: 3,
    inPipeline: 2,
    forReview: 1,
    unassigned: 4,
    performance: "Good",
    columns: ["S.No", "Department", "Total Task", "In Progress", "In Pipeline", "For Review", "Unassigned", "Performance"],
    rows: [
      { 
        data: [1, "John Doe", 28, "1234 Elm St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Complete personal information form",
           "Jane Smith",
           "Low",
           "John Doe",
           "1 week",
           "John Doe",
           "2023-06-15",
           "2023-06-22"]
        }
      },
      { 
        data: [2, "Jane Smith", 34, "5678 Oak St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Verify employment details",
           "Alice Johnson",
           "Medium",
           "Jane Smith",
           "2 weeks",
           "Jane Smith",
           "2023-06-18",
          "2023-07-02"]
        }
      },
      { 
        data: [3, "Alice Johnson", 45, "9101 Maple Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Submit ID proof",
           "Bob Brown",
           "High",
           "Alice Johnson",
           "3 days",
           "Alice Johnson",
           "2023-06-20",
          "2023-06-23"]
        }
      },
      { 
        data: [4, "Bob Brown", 23, "1122 Birch Rd"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Provide emergency contact details",
           "Charlie Davis",
           "Medium",
           "Bob Brown",
           "2 days",
           "Bob Brown",
           "2023-06-19",
          "2023-06-21"]
        }
      },
      { 
        data: [5, "Charlie Davis", 37, "3344 Cedar St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Complete medical history form",
           "Emily Clark",
           "Low",
           "Charlie Davis",
           "1 week",
           "Charlie Davis",
           "2023-06-16",
          "2023-06-23"]
        }
      },
      { 
        data: [6, "David Green", 31, "5544 Pine St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Update financial records",
           "Frank Johnson",
           "High",
           "David Green",
           "3 days",
           "David Green",
           "2023-06-20",
          "2023-06-23"]
        }
      },
      { 
        data: [7, "Emma White", 41, "7755 Willow Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Prepare marketing presentation",
           "George Anderson",
           "Medium",
           "Emma White",
           "2 days",
           "Emma White",
           "2023-06-19",
          "2023-06-21"]
        }
      },
      { 
        data: [8, "Fiona Brown", 26, "9966 Oak St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Draft project proposal",
           "Harry Wilson",
           "Low",
           "Fiona Brown",
           "1 week",
           "Fiona Brown",
           "2023-06-16",
          "2023-06-23"]
        }
      },
      { 
        data: [9, "Grace Johnson", 39, "1122 Elm St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Review HR policies",
           "Isaac Miller",
           "High",
           "Grace Johnson",
           "3 days",
           "Grace Johnson",
           "2023-06-20",
          "2023-06-23"]
        }
      },
      { 
        data: [10, "Henry Clark", 32, "3344 Pine St"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Develop new product prototype",
           "Jack Harris",
           "Medium",
           "Henry Clark",
           "2 days",
           "Henry Clark",
           "2023-06-19",
          "2023-06-21"]
        }
      },
    ]
  },
  {
    sno: 2,
    department: "Finance",
    totalTask: 8,
    inProgress: 2,
    inPipeline: 3,
    forReview: 1,
    unassigned: 2,
    performance: "Average",
    columns: ["S.No", "Department", "Total Task", "In Progress", "In Pipeline", "For Review", "Unassigned", "Performance"],
    rows: [
      { 
        data: [1, "Michael Scott", 45, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Submit budget report",
           "Pam Beesly",
           "High",
           "Michael Scott",
           "2 days",
           "Michael Scott",
           "2023-06-10",
           "2023-06-12"]
        }
      },
      { 
        data: [2, "Angela Martin", 38, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Review financial statements",
           "Oscar Martinez",
           "Medium",
           "Angela Martin",
           "3 days",
           "Angela Martin",
           "2023-06-14",
          "2023-06-17"]
        }
      },
      { 
        data: [3, "Oscar Martinez", 42, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Analyze investment options",
           "Kevin Malone",
           "High",
           "Oscar Martinez",
           "1 week",
           "Oscar Martinez",
           "2023-06-15",
          "2023-06-22"]
        }
      },
      { 
        data: [4, "Kevin Malone", 50, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Prepare tax documents",
           "Angela Martin",
           "High",
           "Kevin Malone",
           "2 weeks",
           "Kevin Malone",
           "2023-06-13",
          "2023-06-27"]
        }
      },
      { 
        data: [5, "Meredith Palmer", 43, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Audit expense reports",
           "Michael Scott",
           "Medium",
           "Meredith Palmer",
           "1 week",
           "Meredith Palmer",
           "2023-06-08",
          "2023-06-15"]
        }
      },
      { 
        data: [6, "Stanley Hudson", 55, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Forecast revenue",
           "Phyllis Vance",
           "High",
           "Stanley Hudson",
           "1 month",
           "Stanley Hudson",
           "2023-06-01",
          "2023-06-30"]
        }
      },
      { 
        data: [7, "Phyllis Vance", 52, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Evaluate cost reduction strategies",
           "Stanley Hudson",
           "High",
           "Phyllis Vance",
           "2 weeks",
           "Phyllis Vance",
           "2023-06-01",
          "2023-06-14"]
        }
      },
      { 
        data: [8, "Creed Bratton", 62, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Update financial software",
           "Ryan Howard",
           "Medium",
           "Creed Bratton",
           "1 week",
           "Creed Bratton",
           "2023-06-18",
          "2023-06-25"]
        }
      },
    ]
  },
  {
    sno: 3,
    department: "Human Resources",
    totalTask: 15,
    inProgress: 5,
    inPipeline: 5,
    forReview: 2,
    unassigned: 3,
    performance: "Excellent",
    columns: ["S.No", "Department", "Total Task", "In Progress", "In Pipeline", "For Review", "Unassigned", "Performance"],
    rows: [
      { 
        data: [1, "Dwight Schrute", 40, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Conduct interviews",
           "Jim Halpert",
           "Medium",
           "Dwight Schrute",
           "1 week",
           "Dwight Schrute",
           "2023-06-15",
           "2023-06-22"]
        }
      },
      { 
        data: [2, "Jim Halpert", 35, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Organize team-building event",
           "Pam Beesly",
           "Low",
           "Jim Halpert",
           "2 weeks",
           "Jim Halpert",
           "2023-06-12",
           "2023-06-26"]
        }
      },
      { 
        data: [3, "Pam Beesly", 30, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Update employee handbook",
           "Angela Martin",
           "Medium",
           "Pam Beesly",
           "1 month",
           "Pam Beesly",
           "2023-06-01",
           "2023-06-30"]
        }
      },
      { 
        data: [4, "Ryan Howard", 28, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Review resumes",
           "Kelly Kapoor",
           "High",
           "Ryan Howard",
           "1 week",
           "Ryan Howard",
           "2023-06-20",
           "2023-06-27"]
        }
      },
      { 
        data: [5, "Kelly Kapoor", 30, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Plan employee training",
           "Ryan Howard",
           "Medium",
           "Kelly Kapoor",
           "2 weeks",
           "Kelly Kapoor",
           "2023-06-10",
           "2023-06-24"]
        }
      },
      { 
        data: [6, "Toby Flenderson", 45, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Handle employee grievances",
           "Pam Beesly",
           "High",
           "Toby Flenderson",
           "3 days",
           "Toby Flenderson",
           "2023-06-18",
           "2023-06-21"]
        }
      },
      { 
        data: [7, "Meredith Palmer", 43, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Coordinate job fair",
           "Phyllis Vance",
           "Medium",
           "Meredith Palmer",
           "1 week",
           "Meredith Palmer",
           "2023-06-21",
           "2023-06-28"]
        }
      },
      { 
        data: [8, "Stanley Hudson", 55, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Develop employee retention program",
           "Angela Martin",
           "High",
           "Stanley Hudson",
           "1 month",
           "Stanley Hudson",
           "2023-06-01",
           "2023-06-30"]
        }
      },
      { 
        data: [9, "Phyllis Vance", 52, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Evaluate performance appraisals",
           "Toby Flenderson",
           "High",
           "Phyllis Vance",
           "2 weeks",
           "Phyllis Vance",
           "2023-06-01",
           "2023-06-14"]
        }
      },
      { 
        data: [10, "Creed Bratton", 62, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Update HR policies",
           "Kelly Kapoor",
           "Medium",
           "Creed Bratton",
           "2 weeks",
           "Creed Bratton",
           "2023-06-10",
           "2023-06-24"]
        }
      },
    ]
  },
  {
    sno: 4,
    department: "IT Support",
    totalTask: 12,
    inProgress: 4,
    inPipeline: 4,
    forReview: 2,
    unassigned: 2,
    performance: "Good",
    columns: ["S.No", "Department", "Total Task", "In Progress", "In Pipeline", "For Review", "Unassigned", "Performance"],
    rows: [
      { 
        data: [1, "Pam Beesly", 30, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Resolve ticket #1234",
           "Ryan Howard",
           "High",
           "Pam Beesly",
           "3 days",
           "Pam Beesly",
           "2023-06-14",
           "2023-06-17"]
        }
      },
      { 
        data: [2, "Ryan Howard", 28, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Install software updates",
           "Pam Beesly",
           "Medium",
           "Ryan Howard",
           "2 days",
           "Ryan Howard",
           "2023-06-18",
           "2023-06-20"]
        }
      },
      { 
        data: [3, "Dwight Schrute", 40, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Fix network issues",
           "Pam Beesly",
           "High",
           "Dwight Schrute",
           "1 day",
           "Dwight Schrute",
           "2023-06-15",
           "2023-06-16"]
        }
      },
      { 
        data: [4, "Jim Halpert", 35, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Set up new workstations",
           "Ryan Howard",
           "Medium",
           "Jim Halpert",
           "1 week",
           "Jim Halpert",
           "2023-06-10",
           "2023-06-17"]
        }
      },
      { 
        data: [5, "Michael Scott", 45, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Backup data",
           "Pam Beesly",
           "High",
           "Michael Scott",
           "2 days",
           "Michael Scott",
           "2023-06-18",
           "2023-06-20"]
        }
      },
      { 
        data: [6, "Oscar Martinez", 42, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Update security protocols",
           "Dwight Schrute",
           "High",
           "Oscar Martinez",
           "1 week",
           "Oscar Martinez",
           "2023-06-12",
           "2023-06-19"]
        }
      },
      { 
        data: [7, "Angela Martin", 38, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Upgrade server hardware",
           "Jim Halpert",
           "High",
           "Angela Martin",
           "2 weeks",
           "Angela Martin",
           "2023-06-01",
           "2023-06-14"]
        }
      },
      { 
        data: [8, "Kevin Malone", 50, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Test new software",
           "Ryan Howard",
           "Medium",
           "Kevin Malone",
           "3 days",
           "Kevin Malone",
           "2023-06-15",
           "2023-06-18"]
        }
      },
      { 
        data: [9, "Meredith Palmer", 43, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Update user permissions",
           "Angela Martin",
           "High",
           "Meredith Palmer",
           "2 days",
           "Meredith Palmer",
           "2023-06-19",
           "2023-06-21"]
        }
      },
      { 
        data: [10, "Stanley Hudson", 55, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Monitor system performance",
           "Jim Halpert",
           "Medium",
           "Stanley Hudson",
           "1 week",
           "Stanley Hudson",
           "2023-06-10",
           "2023-06-17"]
        }
      },
      { 
        data: [11, "Phyllis Vance", 52, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Assist with user support",
           "Dwight Schrute",
           "Low",
           "Phyllis Vance",
           "2 days",
           "Phyllis Vance",
           "2023-06-18",
           "2023-06-20"]
        }
      },
      { 
        data: [12, "Creed Bratton", 62, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Manage data migration",
           "Ryan Howard",
           "High",
           "Creed Bratton",
           "1 month",
           "Creed Bratton",
           "2023-06-01",
           "2023-06-30"]
        }
      },
    ]
  },
  {
    sno: 5,
    department: "Marketing",
    totalTask: 9,
    inProgress: 3,
    inPipeline: 4,
    forReview: 1,
    unassigned: 1,
    performance: "Excellent",
    columns: ["S.No", "Department", "Total Task", "In Progress", "In Pipeline", "For Review", "Unassigned", "Performance"],
    rows: [
      { 
        data: [1, "Angela Martin", 38, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Develop marketing strategy",
           "Pam Beesly",
           "High",
           "Angela Martin",
           "2 weeks",
           "Angela Martin",
           "2023-06-15",
           "2023-06-29"]
        }
      },
      { 
        data: [2, "Kevin Malone", 50, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Design ad campaign",
           "Jim Halpert",
           "Medium",
           "Kevin Malone",
           "1 month",
           "Kevin Malone",
           "2023-06-01",
           "2023-06-30"]
        }
      },
      { 
        data: [3, "Pam Beesly", 30, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Completed",
           "Plan product launch",
           "Angela Martin",
           "High",
           "Pam Beesly",
           "3 weeks",
           "Pam Beesly",
           "2023-06-01",
           "2023-06-22"]
        }
      },
      { 
        data: [4, "Ryan Howard", 28, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "Pending",
           "Coordinate media outreach",
           "Dwight Schrute",
           "Medium",
           "Ryan Howard",
           "1 week",
           "Ryan Howard",
           "2023-06-18",
           "2023-06-25"]
        }
      },
      { 
        data: [5, "Dwight Schrute", 40, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Create social media content",
           "Pam Beesly",
           "Low",
           "Dwight Schrute",
           "2 weeks",
           "Dwight Schrute",
           "2023-06-10",
           "2023-06-24"]
        }
      },
      { 
        data: [6, "Creed Bratton", 62, "1725 Slough Ave"],
        details: {
          columns: ["status", "task", "assignedTo", "impact", "Assignee", "completed", "assignee", "startDate", "deadline"],
          data : [ "In progress",
           "Manage data migration",
           "Ryan Howard",
           "High",
           "Creed Bratton",
           "1 month",
           "Creed Bratton",
           "2023-06-01",
           "2023-06-30"]
        }
      },
    ]
  }
]
          
