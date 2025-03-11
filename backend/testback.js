import {dateFilm, dateActivite, listeInvite, oneFilm, oneActivite, oneInvite, allActiviteByInvite, allActiviteByName, addNewInvite, addNewFilm, addNewActivite, UpdateInviteById, UpdateFilmById, UpdateActiviteById} from './backend.mjs'

try {
    const records = await dateFilm();
    console.log(records);
}
catch (err) {
    console.error(err);
}

try {
    const records = await dateActivite();
    console.log(records);
} catch (err)
 { console.error(err); }

try {
    const records = await listeInvite();
    console.log(records);
} catch (err)
{ console.error(err); }

try {
    const Onerecord = await oneFilm('p063e2bgy953hrq');
    console.log(Onerecord);
    } catch (e) {  
    console.error(e);
    }

    try {
        const Onerecord = await oneActivite('49v182124ma00h2');
        console.log(Onerecord);
        } catch (e) {  
        console.error(e);
        }

        try {
            const Onerecord = await oneInvite('d5d361rbvv0mbd2');
            console.log(Onerecord);
            } catch (e) {  
            console.error(e);
            }

 

            try {
                const sortedRecordsAgent = await allActiviteByInvite('d5d361rbvv0mbd2');
                console.table(sortedRecordsAgent);
            } catch (e) {
                console.error(e);
            }

            try {
                const sortedRecordsAgent = await allActiviteByName('Forsberg');
                console.table(sortedRecordsAgent);
            } catch (e) {
                console.error(e);
            }
            

            try {
                const newInvite = {
                    "Nom_invite": "test ",
                    "Prenom_invite": "test",
                    "Role_invite": "mdrr jsp c un test",
                    "Email_invite": "lalalaal@gmail.com",
                    "Biographie_invite": " de la paix  laalalallaa",
                    
                }; 
                await addNewInvite(newInvite);
                }    catch (e) {
                    console.error(e);
                }

            try {
                const newFilm = {
                    "Titre_film": "test ",
                    "liste_acteur_film": "test",
                    "Synopsis_film": "de la paix  laalalallaa",
                    "Realisation_film": "mdrr jsp c un test",
                    "Numero_salle":2,
                    "Date_projection_film":"2022-12-12",
                    "Anne_real_film":2022,
                    "a_propos_du_real":"il est lalalalala",
                    "Duree_film":"12 minutes",
                    "Langue_film":"VF",

                    
                }; 
                await addNewFilm(newFilm);
                }
                catch (e) {
                    console.error(e);
            }

            try {
                const newActivite = {
                    "Type_activite": "test ",
                    "Lieu_activite": "test",
                    "Description_activite": "mdrr jsp c un test",
                    "Date_activite": "2022-12-12",
                    "Biographie_invite": " de la paix  laalalallaa",
            };
            await addNewActivite(newActivite);
            }
            catch (e) {
                console.error(e);
            }


            try {
                const updateInvite = {
                    "Nom_invite": "test ",
                    "Prenom_invite": "test lalalalal",
                    "Role_invite": "mdrr jsp c un test",
                    "Email_invite": "lalalaal@gmail.com",
                    "Biographie_invite": " de la paix  laalalallaa",
                }; 
                await UpdateInviteById("m8vtv475v9g6i1u", updateInvite);
                }
                catch (e) {
                    console.error(e);
                }

                try {
                    const updateFilm = {
                    "Titre_film": "test lallalalalala ",
                    "liste_acteur_film": "test",
                    "Synopsis_film": "de la paix  laalalallaa",
                    "Realisation_film": "mdrr jsp c un test",
                    "Numero_salle":2,
                    "Date_projection_film":"2022-12-12",
                    "Anne_real_film":2022,
                    "a_propos_du_real":"il est lalalalala",
                    "Duree_film":"12 minutes",
                    "Langue_film":"VF",
                    }; 
                    await UpdateFilmById("96b40645862538e", updateFilm);
                    }
                    catch (e) {
                        console.error(e);
                    }

                    try {
                        const updateActivite = {
                           "Type_activite": "test lalalaal ",
                    "Lieu_activite": "test",
                    "Description_activite": "mdrr jsp c un test",
                    "Date_activite": "2022-12-12",
                    "Biographie_invite": " de la paix  laalalallaa",
                        }; 
                        await UpdateActiviteById("tkkt7e372083gkz", updateActivite);
                        }
                        catch (e) {
                            console.error(e);
                        }