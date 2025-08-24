
//Script for the modal
const btnPrueba = document.getElementById('delete-all-links')
const modalDelete = document.getElementById('delete-confirm-dialog')
const btnConfirm = document.querySelector('.confirmBtn')
const btnCancel = document.querySelector('.cancelBtn')

//Function to close the modal with animation
function closeModal(){
    modalDelete.setAttribute('close', '')

    modalDelete.addEventListener('animationend', () => {

    modalDelete.removeAttribute('close')
    modalDelete.close()

  },{once: true})
}

btnPrueba.addEventListener('click', () => {
  modalDelete.showModal()
})

btnConfirm.addEventListener('click', () => {
  //Script to delete all links

  //

  //Close the modal after delete all links
  closeModal()
})

//Add animation to close the modal
btnCancel.addEventListener('click', () => {
  closeModal()
})