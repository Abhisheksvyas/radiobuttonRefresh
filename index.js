ej.base.enableRipple(true);

var resources1 = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' }
];
var resources2 = [
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' } 
];
var resources3 = [
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];

var elem= HTMLElement;
var rb1;
var rb2;
var rb3;
   
   
    var ganttChart = new ej.gantt.Gantt({
        dataSource: [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [{ resourceId: 4, unit: 50 }] },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        },
    ],
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
			aname: 'Aname',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
            work:'work',
            resourceInfo: 'resources'
        },       
        
          resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
  
        taskType:"FixedDuration",
        workUnit:"Hour",
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', visible: false},
            { field: 'TaskName', headerText: 'Task Name', width: '180'},
            { field: 'resources', headerText: 'Resources', width: '160' },
            { field: 'work', width:'110'},
            { field: 'Duration', width: '100' },
            { field: 'taskType', headerText: 'Task Type', width: '110'},
			{ field: 'Aname', headerText: 'Aname Type', width: '110'},
			{ field: 'ResourceList1',  headerText: 'Radio 1',
            edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                   return rb1.value;
                },
                destroy: () => {
                    rb1.destroy();
                },
                write: (args) => {
                    rb1 = new ej.buttons.RadioButton({
                        label: 'Resource List1', name: 'Resource', enablePersistence: true,
                        change: function(args){
                            if (args.event.returnValue === true) {
                                // var ganttObj = (document.getElementById("ganttContainer") as any).ej2_instances[0];
                                ganttChart.resources = resources1;
                            }
                        }
                    });
                    rb1.appendTo(elem);
                }
            }}
			
			,
            { field: 'ResourceList2',  headerText: 'Radio 2',
            edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                   return rb2.value;
                },
                destroy: () => {
                    rb2.destroy();
                },
                write: (args) => {
                    rb2 = new ej.buttons.RadioButton({
                        label: 'Resource List2', name: 'Resource', enablePersistence: true,
                        change: function(args){
							debugger;
                            if (args.event.returnValue === true) {
                                ganttChart.resources = resources2;
                            }
                        }
                    });
                    rb2.appendTo(elem);
                }
            }},
            { field: 'ResourceList3',  headerText: 'Radio 3',
            edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                   return rb3.value;
                },
                destroy: () => {
                    rb3.destroy();
                },
                write: (args) => {
                    rb3 = new ej.buttons.RadioButton({
                        label: 'Resource List3', name: 'Resource', enablePersistence: true,
                        change: function(args){
							debugger;
                            if (args.event.returnValue === true) {
                                ganttChart.resources = resources3;
                            }
                        }
                    });
                    rb3.appendTo(elem);

                }
            }}
        ],
        editDialogFields: [
            { type: 'General', headerText: 'General' },
            { type: 'Dependency' },
            { type: 'Resources' }
        ],
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
        splitterSettings: { columnIndex: 5.1 },
        labelSettings: {
            rightLabel: 'resources'
        },
		 actionBegin: function(args) {
			 debugger;
			         if (args.requestType === "beforeOpenEditDialog" || args.requestType === "beforeOpenAddDialog" ) {
        
					 }
		 },
		 actionComplete: function(args) {
	  debugger;
	  if (args.requestType === "openEditDialog" || args.requestType === "openAddDialog") {
	  }
		 },
        projectStartDate: new Date('03/28/2019'),
        projectEndDate: new Date('07/28/2019')
     });
    ganttChart.appendTo('#Gantt');
