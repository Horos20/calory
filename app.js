// Storage Controller
// Create later

// Item Controller
const ItemCtrl = (function(){
    // Item constructor
    const Item = function(id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }

    // Data Structure
    const data= {
        items: [
            {id: 0, name:"Steak Dinner", calories: 1200},
            {id: 1, name:"Cookie", calories: 400},
            {id: 2, name:"Eggs", calories: 300}
        ],
        total: 0
    }

    return {
        getItems: function(){
            return data.items
        },
        logData: function(){
            return data
        }
    }
})();


// UI Controller
const UICtrl = (function(){
    console.log("UICtrl")
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){
    return {
        init: function(){
            console.log("Initialiazing App")
            // Fetch items from data structure
            const items = ItemCtrl.getItems()
            console.log(items)
        }
    }
})(ItemCtrl, UICtrl);

// Initialize App
App.init()