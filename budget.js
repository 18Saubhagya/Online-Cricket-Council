var publicSpreadsheetUrl5 = 'https://docs.google.com/spreadsheets/d/1GfhLT3KUD29wwmvUu1qe9pnxZI1qdoPwHZ1PraBFeo0/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl5,
                     callback: showInfo8,
                   simpleSheet: false} )
  }
  function showInfo8(data, tabletop) {
    $.each(tabletop.sheets("Budget").all(),function(j, data1){
      var budg=data1.Budget;
      var teamn=data1.Team;
      var str="<tr><th class='pad'>"+teamn+"</th><th class='pad'>"+budg+"</th></tr>";
      if(teamn!="TEAM"){
      document.getElementById('addjs').innerHTML+=str;
    }
      });
}

  window.addEventListener('DOMContentLoaded', init)
