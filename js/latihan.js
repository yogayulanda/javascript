// Menyatukan 1 File
var navActive = document.getElementsByClassName("navActive")[0]
var thisNav = navActive.children.outerHTML
var status
function nav() {
        thisNav =`<li class="nav-item">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','hubungi-kami','tentang','masuk','daftar');">Beranda
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#tentang" onclick="show('tentang','hubungi-kami','beranda','masuk','daftar');">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','daftar')";>Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#masuk" onclick="show('masuk','hubungi-kami','tentang','beranda','daftar')";>Masuk</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#daftar" onclick="show('daftar','hubungi-kami','tentang','beranda','masuk')";>Daftar</a>
        </li>`
        navActive.innerHTML = thisNav
    }
function show(shown,hidden1,hidden2,hidden3,hidden4) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
    document.getElementById(hidden4).style.display='none';
}

// Menampilkan Data
var data=[];
function tampilData(){
    var showTable = document.querySelector("#showTable");
    showTable.innerHTML = "";
    showTable.innerHTML += `
    <h3> List User </h3>
        <tr>
            <th>No</th>
            <th>Email</th>
            <th>Nama</th>
            <th>Password</th>
            <th>Aksi</th>
        </tr>
    `;

    for (let index = 0; index < data.length; index++) {
        showTable.innerHTML += `
            <tr>
                <td width="20px">${index + 1}</td>
                <td>${data[index].email}</td>
                <td>${data[index].nama}</td>
                <td>${data[index].password}</td>
                <td>
                <a onclick="update(${index})" href="#">update</a>
                <a onclick="hapus(${index})" href="#">hapus</a>
                </td>
            </tr>
        `   
    }
}

// Menambahkan Data
function addData(){
    var nama = document.querySelector("#nama").value;
    var email = document.querySelector("#emailDaftar").value;
    var pass = document.querySelector("#password").value;
    var dataObj = {
        "nama" : nama,
        "email" : email,
        "password" : pass,
    }
    data.push(dataObj);
    resetForm();
    window.alert("data berhasil tersimpan");
}

// Menghapus Data
function hapus(x){
    data.splice(x, 1);
    tampilData();
}

// Mengupdate Data
function update(index){
    var editemail = prompt("Masukkan Alamat Email", data[index].email);
    var editname = prompt("Masukkan Nama", data[index].nama);
    var editpassword = prompt("Masukkan Password", data[index].password);
    var r = confirm("Apakah anda yakin akan mengedit data ini?");
    if (r == true) {
        data[index].email=editemail
        data[index].nama=editname
        data[index].password=editpassword
        window.alert("Data telah diedit")
    } else {
        window.alert("Data gagal diedit")
    } 
    tampilData();
}

// Login
function Login(){
    var email = document.getElementById("email-login").value
    var password = document.getElementById("password-login").value
    
    const login = data.find(data => {
        if (data.email == email && data.password == password) {
            tampilData();
            window.alert('Berhasil Login');
        } else alert("Maaf, e-mail dan password tidak sesuai atau tidak terdaftar.");
    })

}

// Reset Form
function resetForm() {
    document.getElementById("emailDaftar").value           = "";
    document.getElementById("nama").value           = "";
    document.getElementById("password").value       = "";
}
