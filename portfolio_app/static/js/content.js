
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-init .navbar-contents-init');
    const projectContents = document.querySelectorAll('.project-content');
    const experienceContents = document.querySelectorAll('.experience-content');
    const otherContents = document.querySelectorAll('.others-content');

    function resetNavbar() {
        // Clear existing buttons
        navbar.innerHTML = '';
    }

    function createSpans(contents) {
        resetNavbar(); // Clear existing buttons
    
        contents.forEach((_, index) => {
            const span = document.createElement('span');
            span.className = 'button-27';
            span.textContent = index + 1;
            span.setAttribute('role', 'button');
            span.setAttribute('data-index', index);
            span.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior
                showContent(contents, index);
                // Add active class to the clicked span
                document.querySelectorAll('.button-27').forEach(spn => spn.classList.remove('active'));
                span.classList.add('active');
            });
    
            const listItem = document.createElement('li');
            listItem.appendChild(span);
            navbar.appendChild(listItem);
    
            // Set the first span as active by default
            if (index === 0) {
                span.classList.add('active'); // Add active class
            }
        });
    }

    function showContent(section, index) {
        section.forEach((content, idx) => {
            if (idx === index) {
                content.classList.add('show');
            } else {
                content.classList.remove('show');
            }
        });
    }

    // Function to hide all content sections
    function hideAllSections() {
        document.querySelectorAll('.project-content, .experience-content, .others-content').forEach((content) => {
            content.classList.remove('show');
        });
    }

    function handleButtonClick(event) {
        event.preventDefault();
        hideAllSections();
        const buttonId = event.target.id;

        // Create and show content based on the clicked button
        if (buttonId === 'project-btn') {
            createSpans(projectContents);
            showContent(projectContents, 0); 
        } else if (buttonId === 'experience-btn') {
            createSpans(experienceContents);
            showContent(experienceContents, 0); 
        } else if (buttonId === 'others-btn') {
            resetNavbar();
            showContent(otherContents, 0); 
        }
    }

    // Attach event listeners to buttons
    document.getElementById('project-btn').addEventListener('click', handleButtonClick);
    document.getElementById('experience-btn').addEventListener('click', handleButtonClick);
    document.getElementById('others-btn').addEventListener('click', handleButtonClick);

    // Auto-focus and show the first content by default
    window.onload = function() {
        createSpans(projectContents); 
        showContent(projectContents, 0); 

        const projectBtn = document.getElementById('project-btn');
        projectBtn.classList.add('active');
    };
});

// CSS class for active state
document.head.insertAdjacentHTML('beforeend', '<style>.active {   box-shadow: none; outline: none; color: inherit;  background: inherit; border-color: black;border-bottom-width: 12px; border-style: solid; box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px; transform: translateY(-2px);}</style>');



// Add focus class to clicked buttons
document.addEventListener('DOMContentLoaded', () => {
    const btnElList = document.querySelectorAll('.button-27');
    btnElList.forEach(btnEL => {
      btnEL.addEventListener('click', () => {
        btnElList.forEach(btn => btn.classList.remove('active'));
        btnEL.classList.add('active');
      });
    });
  });

  // Add focus class to clicked buttons
document.addEventListener('DOMContentLoaded', () => {
    const btnElList = document.querySelectorAll('.button-27a');
    btnElList.forEach(btnEL => {
      btnEL.addEventListener('click', () => {
        btnElList.forEach(btn => btn.classList.remove('active'));
        btnEL.classList.add('active');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});





