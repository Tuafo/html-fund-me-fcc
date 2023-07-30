document.getElementById("infoButton").addEventListener("click", function () {
    document.getElementById("infoCard").classList.remove("hidden")
    document.getElementById("actionsCard").classList.add("hidden")
})

document.getElementById("actionsButton").addEventListener("click", function () {
    document.getElementById("actionsCard").classList.remove("hidden")
    document.getElementById("infoCard").classList.add("hidden")
})
