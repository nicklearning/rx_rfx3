document.addEventListener('DOMContentLoaded', function () {
    // Define form elements
    const elements = {
        firstName: {
            label: 'First Name',
            type: 'text',
            id: 'first-name',
            name: 'first-name',
            required: true,
        },
        middleName: {
            label: 'Middle Name',
            type: 'text',
            id: 'middle-name',
            name: 'middle-name',
        },
        lastName: {
            label: 'Last Name',
            type: 'text',
            id: 'last-name',
            name: 'last-name',
            required: true,
        },
        dateOfBirth: {
            label: 'Date Of Birth',
            type: 'date',
            id: 'date-of-birth',
            name: 'date-of-birth',
            required: true,
        },
        gender: {
            label: 'Gender (optional)',
            type: 'select',
            id: ['male', 'female', 'other'],
            name: 'gender',
            options: [
                { value: '', text: 'Select one', disabled: true, selected: true },
                { value: 'male', text: 'Male' },
                { value: 'female', text: 'Female' },
                { value: 'other', text: 'Other' },
            ],
        },
        height: {
            label: 'Height (cm)',
            type: 'number',
            id: 'height',
            name: 'height',
            required: true,
            min: 0,
        },
        weight: {
            label: 'Weight (lbs):',
            type: 'number',
            id: 'weight',
            name: 'weight',
            step: '1.0',
            required: true,
            min: 0,
        },
        email: {
            label: 'Email',
            type: 'email',
            id: 'email',
            name: 'email',
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            placeholder: 'Enter valid email address',
            required: true,
        },
        address1: {
            label: 'Address 1',
            type: 'text',
            id: 'address1',
            name: 'address1',
            required: true,
        },
        address2: {
            label: 'Address 2 (optional)',
            type: 'text',
            id: 'address2',
            name: 'address2',
        },
        city: {
            label: 'City',
            type: 'text',
            id: 'city',
            name: 'city',
            required: true,
        },
        state: {
            label: 'State',
            type: 'select',
            id: 'state',
            name: 'state',
            required: true,
            options: [
                { value: '', text: 'Select one', disabled: true, selected: true },
                { value: 'AL', text: 'Alabama' },
                { value: 'AK', text: 'Alaska' },
                { value: 'AZ', text: 'Arizona' },
                { value: 'AR', text: 'Arkansas' },
                { value: 'CA', text: 'California' },
                { value: 'CO', text: 'Colorado' },
                { value: 'CT', text: 'Connecticut' },
                { value: 'DE', text: 'Delaware' },
                { value: 'FL', text: 'Florida' },
                { value: 'GA', text: 'Georgia' },
                { value: 'HI', text: 'Hawaii' },
                { value: 'ID', text: 'Idaho' },
                { value: 'IL', text: 'Illinois' },
                { value: 'IN', text: 'Indiana' },
                { value: 'IA', text: 'Iowa' },
                { value: 'KS', text: 'Kansas' },
                { value: 'KY', text: 'Kentucky' },
                { value: 'LA', text: 'Louisiana' },
                { value: 'ME', text: 'Maine' },
                { value: 'MD', text: 'Maryland' },
                { value: 'MA', text: 'Massachusetts' },
                { value: 'MI', text: 'Michigan' },
                { value: 'MN', text: 'Minnesota' },
                { value: 'MS', text: 'Mississippi' },
                { value: 'MO', text: 'Missouri' },
                { value: 'MT', text: 'Montana' },
                { value: 'NE', text: 'Nebraska' },
                { value: 'NV', text: 'Nevada' },
                { value: 'NH', text: 'New Hampshire' },
                { value: 'NJ', text: 'New Jersey' },
                { value: 'NM', text: 'New Mexico' },
                { value: 'NY', text: 'New York' },
                { value: 'NC', text: 'North Carolina' },
                { value: 'ND', text: 'North Dakota' },
                { value: 'OH', text: 'Ohio' },
                { value: 'OK', text: 'Oklahoma' },
                { value: 'OR', text: 'Oregon' },
                { value: 'PA', text: 'Pennsylvania' },
                { value: 'RI', text: 'Rhode Island' },
                { value: 'SC', text: 'South Carolina' },
                { value: 'SD', text: 'South Dakota' },
                { value: 'TN', text: 'Tennessee' },
                { value: 'TX', text: 'Texas' },
                { value: 'UT', text: 'Utah' },
                { value: 'VT', text: 'Vermont' },
                { value: 'VA', text: 'Virginia' },
                { value: 'WA', text: 'Washington' },
                { value: 'WV', text: 'West Virginia' },
                { value: 'WI', text: 'Wisconsin' },
                { value: 'WY', text: 'Wyoming' }
            ],
        },
        zipcode: {
            label: 'Zip Code',
            type: 'text',
            id: 'zipcode',
            name: 'zipcode',
            pattern: "^[0-9]{5}$",
            required: true,
        },
        phone1: {
            label: 'Phone 1',
            type: 'tel',
            id: 'phone1',
            name: 'phone1',
            pattern: "[+][0-9]{2} [0-9]{3}-[0-9]{4}",
            required: true,
        },
        phone2: {
            label: 'Phone 2 (optional)',
            type: 'tel',
            id: 'phone2',
            name: 'phone2',
            pattern: "[+][0-9]{2} [0-9]{3}-[0-9]{4}",
        },
        password: {
            label: "Password",
            type: "password",
            id: "pass1",
            name: "pass1",
            placeholder: 'Enter password (minimum 8 characters)',
            required: true,
            minLength: 8,
        },
        // Add any additional form elements here
    };

    // Access the form element
    const form = document.getElementById('patientForm');

    // Create a container for form fields (fieldset for semantic grouping)
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);

    // Create two columns within the fieldset for form fields
    const column1 = document.createElement('div');
    column1.className = 'column';
    const column2 = document.createElement('div');
    column2.className = 'column';
    fieldset.appendChild(column1);
    fieldset.appendChild(column2);

    // Define which elements belong to each column
    // For simplicity, assuming you've manually sorted these based on your layout preference
    const elementsFirstColumn = ['firstName', 'middleName', 'lastName', 'dateOfBirth', 'gender', 'height', 'weight', 'email'];
    const elementsSecondColumn = ['address1', 'address2', 'city', 'state', 'zipcode', 'phone1', 'phone2', 'password'];

    // Function to create and append form elements
    function appendFormElement(element, parent) {
        const label = document.createElement('label');
        label.setAttribute('for', element.id);
        label.textContent = element.label;
        parent.appendChild(label);

        if (element.type === 'select') {
            const select = document.createElement('select');
            select.id = element.id;
            select.name = element.name;
            select.required = element.required;
            element.options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.value;
                option.textContent = opt.text;
                if (opt.disabled) option.disabled = opt.disabled; // Handle disabled attribute
                if (opt.selected) option.selected = opt.selected; // Handle selected attribute
                select.appendChild(option);
            });
            parent.appendChild(select);
        } else {
            const input = document.createElement('input');
            input.type = element.type;
            input.id = element.id;
            input.name = element.name;
            if (element.placeholder) input.placeholder = element.placeholder;
            if (element.pattern) input.pattern = element.pattern;
            if (element.step) input.step = element.step;
            input.required = element.required;

            // Check if minLength is specified and apply it to the input
            if (element.minLength) input.minLength = element.minLength;

            parent.appendChild(input);
        }
    }

    // Append form elements to columns based on their distribution
    Object.keys(elements).forEach(key => {
        const element = elements[key];
        if (elementsFirstColumn.includes(key)) {
            appendFormElement(element, column1);
        } else if (elementsSecondColumn.includes(key)) {
            appendFormElement(element, column2);
        }
    });

});