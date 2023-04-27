  const button = document.getElementById("button");

        button.addEventListener("click",showinput);
        function showinput() {
        var x=document.getElementById("colorSelect");
        x.remove(x.selectedIndex);
        }