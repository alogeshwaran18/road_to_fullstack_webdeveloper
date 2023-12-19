function bookAppointment(){
    const dateInput=document.getElementById("appointmentDate")
    const confirmationMessage=document.getElementById("confirmationMessage")

    //check if a date is selected
    if(dateInput.value===''){
        alert('Please select a date for a apppointment.')
        return;
    }


// Process the booking 
const selectDate =new Date(dateInput.value)
const formattedDate=select.toDateString()

// display confirmation message

confirmationMessage.innerHtml = 'Appointment booked for ${formattedDate}.'
}