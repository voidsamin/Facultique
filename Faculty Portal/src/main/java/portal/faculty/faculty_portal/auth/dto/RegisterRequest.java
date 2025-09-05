package portal.faculty.faculty_portal.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank private String name;
    @Email @NotBlank private String email;
    @Size(min=6) private String password;
    @NotBlank private String role; // FACULTY/HOD/ADMIN/IT
    private String department;
}
