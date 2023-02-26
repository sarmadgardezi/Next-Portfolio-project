export const formatDate = (date) =>
    new Date(date).toLocaleString('pt-BR', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    })
