/*navbar*/
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


/*drropdown kl diklik muncul*/
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Menutup dropdown jika mengklik di luar dropdown//
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}


//main body article//
function toggleText() {
    var text = document.getElementById("moreText");
    var button = document.querySelector("button");
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Read less";
    } else {
        text.style.display = "none";
        button.innerHTML = "Read more";
    }
}


//side bar//
function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    document.getElementById('clock').textContent = timeString;
}

// Memperbarui jam setiap detik//
setInterval(updateClock, 1000);

// Menjalankan fungsi updateClock saat halaman dimuat//
updateClock();

//statistik penujung//
let count = localStorage.getItem('page_view');
        if (count === null) {
            count = 0;
        }
        count++;
        localStorage.setItem('page_view', count);
        document.getElementById('count').innerText = count;