const servicesEl = document.querySelector('.navbar-toggle')

// the period is needed before navbar or an error occurs
document.querySelector('.navbar-toggler').addEventListener('click', function(event){
    event.preventDefault()
    document.location.pathname='index.html'
});