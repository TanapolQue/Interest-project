// Make Action on side bar when press Open and Close button

// Add Event press Close button, close side bar
document.getElementById('closeSidebarBtn').addEventListener('click', function () {
    document.querySelector('.sideBar').style.right = '-250px';
})

// Add Event press Open button, open side bar
document.getElementById('openSidebarBtn').addEventListener('click', function () {
    document.querySelector('.sideBar').style.right = '0px';
})
