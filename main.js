/*navar fixedtop shadow*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".activenav").css("background-color", "white");
            $(".activenav").css("box-shadow", "5px -1px 12px -5px grey");
        }
        else {
            $(".activenav").css("background-color", "transparent");
        }
    });
});
/*side bar NavBar*/
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
};
function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
};
/*navIcons*/
function openListHome(){
    document.getElementById("homeIconDropList").style.display="block";
  }
  function closeListHome(){
    document.getElementById("homeIconDropList").style.display="none";
  }
  function openListProduct(){
    document.getElementById("productIconDropList").style.display="block";
  }
  function closeListProduct(){
    document.getElementById("productIconDropList").style.display="none";
  }
  function openListPage(){
    document.getElementById("pagesIconDropList").style.display="block";
  }
  function closeListPage(){
    document.getElementById("pagesIconDropList").style.display="none";
  }
/*-----------------------*/
/*cart sidebar*/
function openCart() {
    document.getElementById("mycartSidebar").style.width = "350px";
};
function closeCart() {
    document.getElementById("mycartSidebar").style.width = "0";
};

