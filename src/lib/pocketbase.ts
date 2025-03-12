import PocketBase from "pocketbase"


export const pb = new PocketBase("http://127.0.0.1:8090") 


interface Film {
  id: string
  Titre_film: string
  Realisation_film: string
  Affiche_film: string
  Synopsis_film: string
  Anne_real_film: number
  Duree_film: string
  Date_projection_film: string
  Numero_salle: number
  Langue_film: string
  liste_acteur_film: string
  a_propos_du_real: string
}

interface Activite {
  id: string
  Type_activite: string
  Lieu_activite: string
  Description_activite: string
  Date_activite: string
  invite_activite: string[]
}

interface Invite {
  id: string
  Nom_invite: string
  Prenom_invite: string
  Role_invite: string
  Photo_invite: string
  Email_invite: string
  Biographie_invite: string
}

export async function dateFilm(): Promise<Film[]> {
  try {
    const records = await pb.collection("film").getFullList<Film>({ sort: "Date_projection_film" })
    return records
  } catch (error) {
    console.error("Erreur lors de la récupération des films:", error)
    return []
  }
}

export async function dateActivite(): Promise<Activite[]> {
  try {
    const records = await pb.collection("activite").getFullList<Activite>({ sort: "Date_activite" })
    return records
  } catch (error) {
    console.error("Erreur lors de la récupération des activités:", error)
    return []
  }
}

export async function listeInvite(): Promise<Invite[]> {
  try {
    const records = await pb.collection("invite").getFullList<Invite>({ sort: "Nom_invite" })
    return records
  } catch (error) {
    console.error("Erreur lors de la récupération des invités:", error)
    return []
  }
}

export async function oneFilm(id: string): Promise<Film> {
  try {
    const record = await pb.collection("film").getOne<Film>(id)
    return record
  } catch (error) {
    console.error(`Erreur lors de la récupération du film ${id}:`, error)
    throw error // Propager l'erreur pour la gérer dans la page
  }
}

export async function oneActivite(id: string): Promise<Activite> {
  try {
    const record = await pb.collection("activite").getOne<Activite>(id)
    return record
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'activité ${id}:`, error)
    throw error
  }
}

export async function oneInvite(id: string): Promise<Invite> {
  try {
    const record = await pb.collection("invite").getOne<Invite>(id)
    return record
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'invité ${id}:`, error)
    throw error
  }
}

export async function allActiviteByInvite(id: string): Promise<Activite[]> {
  try {
    const records = await pb.collection("activite").getFullList<Activite>({
      filter: `invite_activite.id = '${id}'`,
      expand: "invite_activite",
    })
    return records
  } catch (error) {
    console.error(`Erreur lors de la récupération des activités pour l'invité ${id}:`, error)
    return []
  }
}

export async function allActiviteByName(nom: string): Promise<Activite[]> {
  try {
    const records = await pb.collection("activite").getFullList<Activite>({
      filter: `invite_activite.Nom_invite = '${nom}'`,
      expand: "invite_activite",
    })
    return records
  } catch (error) {
    console.error(`Erreur lors de la récupération des activités pour l'invité ${nom}:`, error)
    return []
  }
}

export async function addNewInvite(newInvite: Omit<Invite, "id">): Promise<Invite> {
  try {
    const record = await pb.collection("invite").create<Invite>(newInvite)
    return record
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un nouvel invité:", error)
    throw error
  }
}

export async function addNewFilm(newFilm: Omit<Film, "id">): Promise<Film> {
  try {
    const record = await pb.collection("film").create<Film>(newFilm)
    return record
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un nouveau film:", error)
    throw error
  }
}

export async function addNewActivite(newActivite: Omit<Activite, "id">): Promise<Activite> {
  try {
    const record = await pb.collection("activite").create<Activite>(newActivite)
    return record
  } catch (error) {
    console.error("Erreur lors de l'ajout d'une nouvelle activité:", error)
    throw error
  }
}

export async function UpdateInviteById(id: string, updatedInvite: Partial<Invite>): Promise<Invite> {
  try {
    const record = await pb.collection("invite").update<Invite>(id, updatedInvite)
    return record
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'invité ${id}:`, error)
    throw error
  }
}

export async function UpdateFilmById(id: string, updatedFilm: Partial<Film>): Promise<Film> {
  try {
    const record = await pb.collection("film").update<Film>(id, updatedFilm)
    return record
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du film ${id}:`, error)
    throw error
  }
}

export async function UpdateActiviteById(id: string, updatedActivite: Partial<Activite>): Promise<Activite> {
  try {
    const record = await pb.collection("activite").update<Activite>(id, updatedActivite)
    return record
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'activité ${id}:`, error)
    throw error
  }
}

