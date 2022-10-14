// Your JS code here
const subTypeElement = document.querySelector("#subscription")
const subDurationElement = document.querySelector("#months")
const result = document.querySelector(".result")
let subType = "basic"
let subDuration = 1

subTypeElement.addEventListener("change", event => {
    subType = event.target.value
    updateSubscriptionDiv()
})

subDurationElement.addEventListener("change", event => {
    subDuration = event.target.value
    updateSubscriptionDiv()
})

const updateSubscriptionDiv = () => {
    let monthlyCost = 5
    if (subType === "Standard") {
        monthlyCost = 7
    } else if (subType === "premium"){
        monthlyCost = 10
    }

    const total = subDuration * monthlyCost
    result.textContent = `You have chosen a ${subDuration} month ${subType} plan for $${total}`
}
