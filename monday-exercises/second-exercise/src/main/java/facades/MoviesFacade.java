package facades;

import entities.Movies;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MoviesFacade {

    private static MoviesFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private MoviesFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MoviesFacade getFacadeExample(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MoviesFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Movies findMovie(int id) {
        EntityManager em = emf.createEntityManager();
        try {
            Movies movie = em.find(Movies.class, id);
            return movie;
        } finally {
            em.close();
        }
    }

    public List<Movies> getAllMovies() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Movies> query
                    = em.createQuery("Select movie from Movies movie", Movies.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }
}
