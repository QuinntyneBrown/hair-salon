using HairSalon.Models;

namespace HairSalon.Dtos
{
    public class CurrentUserResponseDto: UserDto
    {
        public CurrentUserResponseDto(User entity)
            : base(entity)
        {

        }

        public CurrentUserResponseDto()
        {

        }
    }
}