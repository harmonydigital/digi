function openCity(evt, cityName, sect) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    var tabcontentPlans = document.getElementsByClassName("tabcontentPlans");

      console.log(sect)
    
      if(sect=='folio'){
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      }else{
        for (i = 0; i < tabcontentPlans.length; i++) {
          tabcontentPlans[i].style.display = "none";
        }
      
    
        tablinksPlans = document.getElementsByClassName("tablinksPlans");
        for (i = 0; i < tablinksPlans.length; i++) {
          tablinksPlans[i].className = tablinksPlans[i].className.replace(" active", "");
        }
      }
    
   
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[0].style.display = "block";
  }
 
  
  tabcontentPlans = document.getElementsByClassName("tabcontentPlans");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontentPlans[0].style.display = "block";
  }
 