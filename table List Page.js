Vue.use(VueTables.ClientTable);

        new Vue({
            el: "#app",
            data: {
                columns: ['name', 'date', 'edit', 'del'],
                data: getData(),
                options: {
                    filterByColumn: true,
                    sortable: ['name', 'date'],
                    filterable: ['name', 'date'],
                    headings: {
                        name: 'Dashboard Name',
                        date: 'Created On',
                        edit: 'Edit',
                        del: 'Delete'
                    }
                }
            }
        });

        function getData() {
            return [{
                date: "2/2/2018",
                name: "Booking revenue",
                edit: "http://site.come/page/edit/",
                del: "http://site.come/page/del/",
 
            }, {
                date: "12/3/2018",
                name: "Shipment Value",
                edit: "http://site.come/page/edit/",
                del: "http://site.come/page/del/",
 
            }, {
                date: "15/3/2018",
                name: "Sales Growth",
                edit: "http://site.come/page/edit/",
                del: "http://site.come/page/del/",
 
            }, {
                date: "18/3/2018",
                name: "Opportunity Status",
                edit: "http://site.come/page/edit/",
                del: "http://site.come/page/del/",
 
            }, {
                date: "30/3/2018",
                name: "Shipped Late",
                edit: "http://site.come/page/edit/",
                del: "http://site.come/page/del/",
 
            }, {
                date: "1/4/2018",
                name: "Average Sales Value",
                edit: "http://site.come/page/edit/",
                del: "http://site.come/page/del/",
 
            }, 
 
            ];
        }

