import { memo } from "react";

const BeneficiaryEditPage = () => {
  return (
    <>
      <form action="' + url + '" method="post">
        ' + '<input type="text" name="id_usuario" value="' + idusuario + '" />'
        + ---15222 '
        <input
          type="text"
          name="documento"
          value="' + $('#documento').val() + '"
        />
        ' + 1000914447 '
        <input type="text" name="rol" value="' + $('#rol').val() + '" />' + 4 '
        <input type="text" name="periodo" value="' + periodo + '" />' + 10 '
        <input type="text" name="nombre" value="' + $('#nombre').val() + '" />'
        + Cristina '
        <input type="text" name="correo" value="' + $('#correo').val() + '" />'
        + gacercescristina32@gmail.com '
        <input type="text" name="tipoc" value="4" />' + 4 '
        <input type="text" name="modalidad" value="' + modalidad + '" />' + 2 '
        <input type="text" name="pseleccion" value="' + pseleccion + '" />' + 7
        '<input type="text" name="npseleccion" value="' + npseleccion + '" />' +
        2022-1 '
      </form>
    </>
  );
};

export default memo(BeneficiaryEditPage);
