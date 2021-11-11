function healthSectionHide() {
    var checkBox = document.getElementById("id-Health-Insurance");
    var div = document.getElementById("health-div-hide");
    if (checkBox.checked == true) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function showCalculateDiv() {
    document.getElementById('calculation-div').style.display = "block";
}


function selectPlanForFamilyPotection(elements) {

    var strdisplay = elements.options[elements.selectedIndex].value;
    var elements = document.getElementById("hideSectionForPlan_1");

    if (strdisplay == 'select_one') {
        elements.style.display = "none";
    }
    else {
        elements.style.display = "block";
    }
}