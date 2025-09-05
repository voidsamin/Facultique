package portal.faculty.faculty_portal.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import portal.faculty.faculty_portal.user.User;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByAssignedTo(User user);
    List<Task> findByAssignedToAndStatus(User user, TaskStatus status);
    List<Task> findByDueAtBeforeAndStatusNot(Instant cutoff, TaskStatus status);
    List<Task> findByStatus(TaskStatus status);
    // ✅ Basic query (should work)
    List<Task> findByCreatedAtBetween(Instant startDate, Instant endDate);

    // ✅ CORRECT: Simple count by assignedTo (test this first)
    @Query("SELECT COUNT(t) FROM Task t WHERE t.assignedTo.id = :userId")
    long countByAssignedUserId(@Param("userId") Long userId);

    // ✅ CORRECT: Count with date range
    @Query("SELECT COUNT(t) FROM Task t WHERE t.assignedTo.id = :userId AND t.createdAt BETWEEN :startDate AND :endDate")
    long countByUserInPeriod(@Param("userId") Long userId,
                             @Param("startDate") Instant startDate,
                             @Param("endDate") Instant endDate);

    // ✅ CORRECT: Count by status
    @Query("SELECT COUNT(t) FROM Task t WHERE t.assignedTo.id = :userId AND t.status = :status")
    long countByUserAndStatus(@Param("userId") Long userId, @Param("status") TaskStatus status);

    // ✅ CORRECT: Combined query
    @Query("SELECT COUNT(t) FROM Task t WHERE t.assignedTo.id = :userId AND t.status = :status AND t.createdAt BETWEEN :startDate AND :endDate")
    long countByUserStatusAndPeriod(@Param("userId") Long userId,
                                    @Param("status") TaskStatus status,
                                    @Param("startDate") Instant startDate,
                                    @Param("endDate") Instant endDate);
}
