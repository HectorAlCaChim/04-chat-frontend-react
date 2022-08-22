import moment from 'moment';
export const fecha = (fecha) => {
    const pipeFecha = moment(fecha);

    return pipeFecha.format('HH:mm a | MMMM Do')
}