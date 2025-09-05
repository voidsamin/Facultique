package portal.faculty.faculty_portal.task.dto;

import lombok.Builder;
import lombok.Value;

import java.time.Instant;

@Value
@Builder
public class TaskView {
    Long id;
    String title;
    String description;
    Instant dueAt;
    String status;
    Integer priority;
    MiniUser assignedTo;
    MiniUser assignedBy;
    Instant createdAt;
    Instant updatedAt;
    boolean locked;

    @Value @Builder
    public static class MiniUser {
        Long id;
        String name;
        String email;
        String role;
        String department;
    }
}
