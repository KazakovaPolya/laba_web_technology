function serializeForm(formNode) {
    let radio_check = 0;
    let text_check = 1;
    let password_check = 1;
    let checkbox_check = 0;

    data = Array.from(formNode)
        .map((element) => {
            const { name, type } = element;
            const value = element.value;
            if (type === "radio" && element.checked) {
                radio_check = 1;
                return;
            }

            if (type === "checkbox" && element.checked) {
                checkbox_check = 1;
                return;
            }

            if (type === 'text' && value == '') {
                text_check = 0;
                return;
            }

            return { name, value }
        })
    if (text_check && radio_check && password_check && checkbox_check)
        return data;
    alert("Заполниите все поля")
    return []
}

function check_input(event) {
    data = serializeForm(applicantForm)
    if (data.length)
        sendData(new FormData(my_form));
    else
        event.preventDefault()
}

async function sendData(data) {
    return await fetch('../cgi-bin/form.py', {
        method: 'POST',
        body: data,
    })
}
const applicantForm = document.getElementById('my_form');
applicantForm.addEventListener('submit', check_input)