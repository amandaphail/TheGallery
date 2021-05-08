require "test_helper"

class GalleryImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gallery_images_index_url
    assert_response :success
  end

  test "should get show" do
    get gallery_images_show_url
    assert_response :success
  end

  test "should get create" do
    get gallery_images_create_url
    assert_response :success
  end

  test "should get update" do
    get gallery_images_update_url
    assert_response :success
  end

  test "should get delete" do
    get gallery_images_delete_url
    assert_response :success
  end
end
