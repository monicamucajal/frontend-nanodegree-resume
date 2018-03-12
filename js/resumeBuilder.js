// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
var bio = {
    "name": "Monica Crisostomo",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "310-333-1234",
        "email": "monicamuca@gmail.com",
        "github": "www.github.com/monicamucajal",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "Hello, welcome to my resume page",
    "skills": ["Javascript", "SQL", "HTML", "CSS"],
    "biopic": "images/monica.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(formattedName + formattedRole);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLocation);
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLocation);
        $("#header").append(formattedBiopic + formattedWelcome);
        $("#header").append(HTMLskillsStart);
        var maxNum = bio.skills.length;
        for (var i = 0; i < maxNum; i = i + 1) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
var education = {
    "schools": [{
        "name": "Woodbury University",
        "location": "Burbank, CA",
        "degree": "B.S.",
        "majors": ["Computer Information Systems"],
        "dates": "1996",
    }, ],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017-Present",
        "url": "http://www.udacity.com"
    }],
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        if (this.onlineCourses.hasOwnProperty(onlineCourse)) {
            $("#education").append(HTMLschoolStart);
            formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedTitle + formattedOnlineSchool + formattedOnlineDates + formattedUrl);
        }
    }
};
var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "Senior Software Test Engineer",
        "location": "Los Angeles, CA",
        "dates": "2011 - Present",
        "description": "Work in a Scrum team reviewing requirements, participating in design reviews, working on the test strategy, testing single microservices deployed on Kubernetes clusters, verifying integration with multiple microservices, usage of N1QL queries to interface with Couchbase buckets, and creation of automated scripts using CA Dev Test (former ITKO LISA)."
    }, {
        "employer": "Xerox",
        "title": "Software Test Engineer",
        "location": "Los Angeles, CA",
        "dates": "2000 - 2011",
        "description": "Developed test plans, wrote test cases and executed complete test cycles. Investigated problems, wrote detailed bug reports and performed bug verification. "
    }],
};
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var k = 0; k < work.jobs.length; k++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[k].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[k].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[k].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[k].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[k].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedDescription);
    }
};
var projects = {
    "projects": [{
        "title": "Software Testing project",
        "dates": "2017",
        "description": "Requirements and Test Case management tool.  This tool allows you to store your project requirements, tie them to test cases, maintain test cases and test suites",
        "images": ["images/image1a.png", "images/image2a.png"]
    }],
};
projects.display = function() {
    for (var p = 0; p < projects.projects.length; p++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
        $(".project-entry:last").append(formattedProjectDescription);
        if (projects.projects[p].images.length > 0) {
            for (var img = 0; img < projects.projects[p].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};
display([bio, education, work, projects]);

function display(elements) {
    if (elements.length > 0) {
        for (var element = 0; element < elements.length; element++) {
            elements[element].display();
        }
    }
}
$("#mapDiv").append(googleMap);