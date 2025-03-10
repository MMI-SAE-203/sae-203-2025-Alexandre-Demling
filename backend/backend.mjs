import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function dateFilm() {
    const records = await pb.collection('film').getFullList({ sort: 'Date_projection_film', });
    return records;
    }

    export async function dateActivite() {
        const records = await pb.collection('activite').getFullList({ sort: 'Date_activite', });
        return records;
        }

        export async function listeInvite() {
            const records = await pb.collection('invite').getFullList({ sort: 'Nom_invite', });
            return records;
            }

            export async function oneFilm(id) {
                const Onerecord = await pb.collection('film').getOne(id);
                return Onerecord;
                }

                export async function oneActivite(id) {
                    const Onerecord = await pb.collection('activite').getOne(id);
                    return Onerecord;
                    }

                    export async function oneInvite(id) {
                        const Onerecord = await pb.collection('invite').getOne(id);
                        return Onerecord;
                        }

                        export async function allActiviteByInvite(id) {
                            const sortedRecordsAgent = await pb.collection('activite').getFullList({
                                filter: `invite_activite.id = '${id}'`,
                                expand: 'invite_activite',
                            });
                            return sortedRecordsAgent;
                        }
                    
                        export async function allActiviteByName(nom) {
                            const sortedRecordsAgent = await pb.collection('activite').getFullList({
                                filter: `invite_activite.Nom_invite = '${nom}' `,
                                expand: 'invite_activite',
                            });
                            return sortedRecordsAgent;
                        }

                        export async function addNewInvite(newInvite) {
                            await pb.collection('invite').create(newInvite); 
                        }

                        export async function addNewFilm(newFilm) {
                            await pb.collection('film').create(newFilm); 
                        }

                        export async function addNewActivite(newActivite) {
                            await pb.collection('activite').create(newActivite); 
                        }
