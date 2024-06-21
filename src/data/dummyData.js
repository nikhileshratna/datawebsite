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
    columns: ["S.No", "Department", "Total Task", " In Progress", "In Pipeline", "For Review", "Unassigned", "Performance"],
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
      // Add more rows with details object
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
  // Add more objects with rows and details
];
