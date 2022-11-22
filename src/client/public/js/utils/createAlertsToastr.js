toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-bottom-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '3000',
  hideDuration: '2000',
  timeOut: '2000',
  extendedTimeOut: '2000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

function createAlertsToastr(alerts) {

 
    if (alerts.succes) return toastr.success(alerts.succes)
    

    alerts.errors.forEach((e) => {
      toastr.error(e.msg);
    });
  
}
