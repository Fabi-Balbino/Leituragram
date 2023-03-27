function abrirAlerta(){
    Swal.fire({
        icon: 'warning',
        title: 'Você precisa estar logado para favoritar. Deseja fazer login?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Fazer Login',
        denyButtonText: `Cadastrar-se`,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'teal',
        denyButtonColor: '#cd853f',

      }).then((result) => {
  
        if (result.isConfirmed) {
            window.location.href = "../login.html"
        } else if (result.isDenied) {
            window.location.href = "../cadastro.html"
        }
      })    
}