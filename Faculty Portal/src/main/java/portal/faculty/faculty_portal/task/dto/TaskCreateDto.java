package portal.faculty.faculty_portal.task.dto;

import lombok.Data;
import java.time.Instant;

@Data
public class TaskCreateDto {
    private String title;
    private String description;
    private Instant dueAt;          // e.g., "2025-09-05T18:00:00Z"
    private Long assignedToUserId;  // faculty's user id
    private Integer priority;       // optional (default 3)
}
