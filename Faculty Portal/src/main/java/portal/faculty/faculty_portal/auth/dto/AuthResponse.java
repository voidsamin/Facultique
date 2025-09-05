package portal.faculty.faculty_portal.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class AuthResponse {
    private String token;
    private String role;
    private String name;
    private String email;
}
