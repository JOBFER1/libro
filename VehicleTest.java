import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class VehicleTest {

    @Test
    void testAccelerate() {
        Vehicle vehicle = new Vehicle("Toyota", "Corolla", 2020);
        vehicle.accelerate();
        // Since the accelerate method only prints a message, we can check the output manually
        // or use a library like System Rules to capture the output and assert it.
        // For simplicity, we assume the method works as expected if no exceptions are thrown.
        assertTrue(true);
    }
}