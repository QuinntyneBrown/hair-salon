namespace HairSalon.Dtos
{
    public class UserAddOrUpdateResponseDto: UserDto
    {
        public UserAddOrUpdateResponseDto(HairSalon.Models.User entity)
            :base(entity)
        {

        }
    }
}
