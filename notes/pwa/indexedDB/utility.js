
var dbPromise = idb.open('posts-store', 1, function (db) {          //open dtabase in indexedDB with a specific name using idb variable diclared in wrapper file(idb.js) with version number of db
  if (!db.objectStoreNames.contains('posts')) {                     //check if object store already present or not(unlike cache api its creates duplicate stores rather than opening the existing one)
    db.createObjectStore('posts', {keyPath: 'id'});                 //creating the object-store(table) with primary key of table as 2nd arguement
  }
  if (!db.objectStoreNames.contains('sync-posts')) {
    db.createObjectStore('sync-posts', {keyPath: 'id'});
  }
});

function writeData(st, data) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');                     //indexedDB has transactional operational model(either complete or none), so we create a transaction with store name and read-write propertu
      var store = tx.objectStore(st);                               //open store using transaction
      store.put(data);                                              //write data to indexedDB store
      return tx.complete;                                           //complete the transaction
    });
}

function readAllData(st) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readonly');
      var store = tx.objectStore(st);
      return store.getAll();                                        //get all the data from store
                                                                     //don't need to complete the transaction as we are only retrieving and not changing anything to the indexedDB database
    });
}

function clearAllData(st) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.clear();                                                 //clear all the data from store
      return tx.complete;
    });
}

function deleteItemFromData(st, id) {
  dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.delete(id);                                              //delete a particular post from the store
      return tx.complete;
    })
    .then(function() {
      console.log('Item deleted!');
    });
}