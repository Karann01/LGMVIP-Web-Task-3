let students = [];

// Function to add a new task
function addStudent() {
    document.getElementById('studentDisplay').innerHTML = "";

    const Name = document.getElementById('name');
    const name = Name.value;
    const Email = document.getElementById('email');
    const email = Email.value;
    const Website = document.getElementById('website');
    const website = Website.value;
    const ImgLink = document.getElementById('imgLink');
    const imglink = ImgLink.value;


    const Gender = document.querySelector('input[name="gender"]:checked');
    const gender = Gender.value

    let arr = [];


    let Skills = document.querySelectorAll("input[type='checkbox']:checked");
    Skills.forEach(skill => {
        arr.push(skill.value)
    })
    console.log(arr);

    if (name !== "" && email !== "") {

        const student = {
            name: name,
            email: email,
            website: website,
            imglink: imglink,
            gender: gender,
            skills: arr
        };
        console.log(student)
        students.push(student);

    }
    Name.value = '';
    Email.value = '';
    Website.value = '';
    ImgLink.value = '';

    Gender.checked = false;
    // Gender.forEach(gender => {
    //     gender.checked = false;
    // })
    Skills.forEach(skill => {
        skill.checked = false;
    })
    // Gender.value = '';
    // Skills.value = '';
    render();

}

// Function to render tasks on the page
function render() {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '';

    if (students.length != 0) {

        students.forEach(student => {
            // create detail element for details of student
            const details = document.createElement('div');
            details.setAttribute('id', student.email);
            details.setAttribute('class', "details");
            usersContainer.appendChild(details);

            //For detail 
            const detailsInfo = document.createElement('div');
            detailsInfo.setAttribute('class', "detailsInfo");
            details.appendChild(detailsInfo);
            //For Img  
            const profileImg = document.createElement('div');
            profileImg.setAttribute('class', "profileImg");
            details.appendChild(profileImg);



            // create name div
            const name = document.createElement('div');
            name.innerHTML = student.name;
            detailsInfo.appendChild(name);

            // create email div
            const email = document.createElement('div');
            email.innerHTML = student.email;
            detailsInfo.appendChild(email);

            // create website anchor element
            const website = document.createElement('a');
            website.setAttribute('href', student.website)
            website.setAttribute('target', "_blank")
            website.setAttribute('class', "websiteText")
            website.innerHTML = student.website;
            detailsInfo.appendChild(website);

            // create gender div 
            const gender = document.createElement('div');
            gender.innerHTML = student.gender;
            detailsInfo.appendChild(gender);

            // create skills div 
            const skills = document.createElement('div');
            skills.innerHTML = student.skills;
            detailsInfo.appendChild(skills);

            // create img link  
            const imglink = document.createElement('img');
            imglink.setAttribute('src', student.imglink)
            imglink.setAttribute('alt', "profile_photo")
            imglink.setAttribute('class', "Img")
            profileImg.appendChild(imglink);

        });
    }
}

// Initial rendering of tasks
render()