let participantCount = 1;

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
            <label for="activity">Activity #<span>*</span></label>
            <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
            <label for="fee">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
            <label for="date">Desired Date <span>*</span></label>
            <input id="date" type="date" name="date" />
            </div>
            <div class="item">
            <p>Grade</p>
            <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
            </div>
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add");

    addButton.addEventListener("click", () => {
        participantCount++;

        addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
    })
});

const form = document.querySelector("form");
const summary = document.getElementById("summary");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const total = totalFees();
    const name = form.querySelector('input[name="adult_name"]').value;

    form.style.display = "none";
    summary.style.display = "block";

    summary.textContent = `Thank you ${name} for registering. You have registered ${participantCount} participants and owe $${total} in Fees.`;
});

function totalFees() {
    let feeElements = document.querySelectorAll("input[name^='fee']");
    console.log(feeElements);
    feeElements = [...feeElements];

    const total = feeElements.reduce((sum, input) => {
        const value = parseFloat(input.value);
        return sum + (isNaN(value) ? 0 : value);
    }, 0);

    return total;
}