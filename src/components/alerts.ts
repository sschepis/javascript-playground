import swal from 'sweetalert'

export async function confirm(params: {
  title: string,
  text: string,
  icon: string,
  buttons: boolean,
  dangerMode: boolean,
  confirmedMsg: string,
  successIcon: string,
  cancelledMsg: string
}) {
  const promise = new Promise((resolve, reject) => {
    swal({
      title: params.title || 'Are you sure?',
      text: params.text || 'Once performed, this action cannot e undone!'
      icon: params.icon || 'warning',
      buttons: params.buttons || true,
      dangerMode: params.dangerMode || true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal(params.confirmedMsg || 'Your action has been performed and the world is better for it', {
          icon: params.successIcon || 'success',
        });
      } else {
        swal(params.cancelledMsg || 'You\'re stalling, Neo');
      }
    })
  })
}

export async function getWorkspaceNameFromUser() {
  return swal({
    text: 'Enter a name for the new workspace',
    content: 'input',
    buttons: true,
  })
}
