export interface BeneficiaryInfo {
    Tipo_de_documento: string;
    Nro_de_identificacion: string;
    Nombre: string;
    Lugar_expedicion: string;
    genero: string;
    Fecha_nacimiento: string;
    Edad: string;
    Pais_de_nacimiento: string;
    Dpto_de_nacimiento: string;
    Municipio_de_nacimiento: string;
    Direccion_residencia: string;
    Celular: string;
    Correo: string;
    IES: string;
    Programa_academico: string;
    Tipo_documento_deudor: string;
    Nro_documento_deudor: string;
    Nombre_deudor: string;
    Dpto_resd_deudor: string;
    Mpio_resd_deudor: string;
    Dir_resd_deudor: string;
    Telefono_deudor: string;
    Celular_deudor: string;
    Correo_deudor: string;
    Actividad_economica_deudor: string;
    Empresa_deudor: string;
    Cargo_deudor: string;
    Dir_empresa_deudor: string;
    Tel_empresa_deudor: string;
    Salario_deudor;
}

export interface findBeneficiary{
    foundId: number,
    document: number
}