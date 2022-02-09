const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Отправка...'
    const errorText = ''
    const successText = 'Отправлено!'


    const validate = (list) => {
        let success = true

       
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    } 

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            console.log(element);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.val
            }
        })

        console.log('submit');

        if(validate(formElements)) {
            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText

                formElements.forEach(input => {
                    input.value = ''
                })
            })
            .catch(error => {
                statusBlock.textContent = successText
            })
        } else [
            alert('Запоните, пожалуйста, все поля')
        ]
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        submitForm()
    })

    
}

export default sendForm